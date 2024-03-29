import React from "react";
import { Card, Col, Input, Row, Typography } from "antd";
import WithdrawalTransactionTable from "../../components/Admin/WithdrawalTransactionTable";

const { Search } = Input;
const { Title } = Typography;

const AdminViewTransactions = () => {
  return (
    <div>
      <div className="center">
        <Title level={2}>Tutor Money Withdrawal History</Title>
      </div>

      <Row justify="end" className="mb-2">
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <Search placeholder="Search text" enterButton />
        </Col>
      </Row>

      <Card className="card">
        <WithdrawalTransactionTable />
      </Card>
    </div>
  );
};

export default AdminViewTransactions;
