import React, { useEffect, useState } from "react";
import { Card, Col, Input, Table, Row, Spin, Typography } from "antd";
import { useHistory } from "react-router-dom";
import FuzzySearch from "fuzzy-search";

import { BaseAPI } from "../../utils/Api";
import EmptyState from "../../components/controls/EmptyState";
import ErrorHandler from "../../components/controls/ErrorHandler";
import Notification from "../../components/controls/Notification";

const { Title } = Typography;
const { Search } = Input;

const TutorCancelledClasses = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [classList, setClassList] = useState([]);
  const [searchedClassList, setSearchedClassList] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await BaseAPI.get("/tutors/get-cancel-classes", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      })
        .then((res) => {
            console.log(res.data.data)
          const info = res.data.data.map((el) => ({
            ...el,
            key: el.id,
          }));
          setClassList(info);
          setSearchedClassList(info);
        })
        .catch((err) => {
          if (err?.response?.data?.message) {
            ErrorHandler(err?.response?.data?.message, history);
          } else {
            Notification("Something went wrong", "Please check your internet connection and try again or communicate with the admin", "error");
          }
        })
        .finally(() => setLoading(false));
    })();
  }, [history]);


  const searcher = new FuzzySearch(classList, ["agenda", "subject", "name"], { sort: true });

  const handleOnSearch = (value) => {
    if (value) {
      const result = searcher.search(value);
      setSearchedClassList([...result]);
    } else {
      setSearchedClassList(classList);
    }
  };

  const handleSearchChange = (e) => {
    if (e.target.value) {
      const result = searcher.search(e.target.value);
      setSearchedClassList([...result]);
    } else {
      setSearchedClassList(classList);
    }
  };

  const columns = [
    {
      title: "Class Name",
      dataIndex: "agenda",
      key: "agenda",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Time",
      dataIndex: "start_time",
      key: "start_time",
    },
    {
      title: "End Time",
      dataIndex: "end_time",
      key: "end_time",
    },
    {
      title: "Package Type",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Student Name",
      dataIndex: "student_name",
      key: "student_name",
    },
    {
      title: "Student Institution Name",
      dataIndex: "student_institute_name",
      key: "student_institute_name",
    },
    {
      title: "Rating",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Spin spinning={loading}>
      <div className="center">
        <Title level={2}>Cancelled Classes</Title>
      </div>

      {classList.length > 0 ? (
        <>
          <Row justify="end" className="mb-1" gutter={[8, 8]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
              <Search placeholder="Search class" allowClear enterButton onSearch={handleOnSearch} onChange={handleSearchChange} />
            </Col>
          </Row>

          <Card className="card">
            <Table columns={columns} dataSource={searchedClassList} scroll={{ x: 1200 }} />
          </Card>
        </>
      ) : (
        <Row justify="center">
          <EmptyState description="Wow! You haven't cancelled any class yet." />
        </Row>
      )}
    </Spin>
  );
};

export default TutorCancelledClasses;