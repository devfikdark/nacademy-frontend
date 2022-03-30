import React, { useEffect, useState } from "react";
import { Card, Col, Descriptions, Row, Spin, Typography } from "antd";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

import { BaseAPI } from "../../utils/Api";
import Notification from "../../components/controls/Notification";
import ErrorHandler from "../../components/controls/ErrorHandler";

const { Title } = Typography;

const StudentCompletedClassDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [classDetails, setClassDetails] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await BaseAPI.get(`/students/classes/${id}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
        },
      })
        .then((res) => {
          console.log(res.data.data);
          setClassDetails(res.data.data);
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

    return () => {
      setClassDetails([]);
    };
  }, []);

  return (
    <Spin spinning={loading}>
      <div className="center">
        <Title level={2}>Class Details</Title>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }}>
          <Card className="card">
            <Descriptions bordered title="Class Information">
              <Descriptions.Item label="Class Agenda">{classDetails?.classInfo?.agenda}</Descriptions.Item>
              <Descriptions.Item label="Class Name">{classDetails?.classInfo?.class_name}</Descriptions.Item>
              <Descriptions.Item label="Subject">{classDetails?.classInfo?.subject}</Descriptions.Item>
              <Descriptions.Item label="Class Conducted Date">{moment(classDetails?.classInfo?.date).format("LL")}</Descriptions.Item>
              <Descriptions.Item label="Start Time">{classDetails?.classInfo?.start_time}</Descriptions.Item>
              <Descriptions.Item label="End Time">{classDetails?.classInfo?.end_time}</Descriptions.Item>
              <Descriptions.Item label="Student Name">{classDetails?.classInfo?.student_name}</Descriptions.Item>
              <Descriptions.Item label="Student Institution Name">{classDetails?.classInfo?.student_institute_name}</Descriptions.Item>
              <Descriptions.Item label="Tutor Name">{classDetails?.classInfo?.tutor_name}</Descriptions.Item>
              <Descriptions.Item label="Tutor Institution Name">{classDetails?.classInfo?.tutor_institute_name}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col xs={{ span: 24 }}>
          <Card className="card">
            <Descriptions bordered title="Feedback">
              <Descriptions.Item label="Given Rating">{classDetails?.ratingInfo?.rating}</Descriptions.Item>
              <Descriptions.Item label="Comment">{classDetails?.ratingInfo?.comment}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </Spin>
  );
};

export default StudentCompletedClassDetails;