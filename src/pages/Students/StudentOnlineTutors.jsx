import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import { useHistory } from "react-router-dom";

import AppCard from "../../components/common/AppCard";
import OnlineTutorsTable from "../../components/Student/OnlineTutorsTable";

const { Title } = Typography;

const StudentOnlineTutors = () => {
  const history = useHistory();

  // states
  const [loading, setLoading] = useState(false);
  const [onlineTutorList, setOnlineTutorList] = useState([]);

  return (
    <>
      <Row justify="center">
        <Title level={2}>Currently Online</Title>
      </Row>
      <Row justify="center" className="mb-2">
        <span style={{ fontSize: "5em", color: "#00c853", fontWeight: "bold" }}>45</span>
      </Row>
      <Row>
        <Col xs={{ span: 24 }}>
          <AppCard heading="Online Teacher Information">
            <OnlineTutorsTable />
          </AppCard>
        </Col>
      </Row>
    </>
  );
};

export default StudentOnlineTutors;
