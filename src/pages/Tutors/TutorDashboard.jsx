import { Col, Row } from "antd";

import AppCard from "../../components/assets/AppCard";
import DashboardCard from "../../components/assets/DashboardCard";
import LineChart from "../../components/Tutor/charts/LineChart";
import PieChart from "../../components/Tutor/charts/PieChart";
import TodayClassListTable from "../../components/Tutor/TodayClassListTable";

const TutorDashboard = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <DashboardCard title="Total Students" count="40" color="#1CACF4" />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <DashboardCard title="Total Class Taken" count="45" color="#EB8A24" />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 8 }}>
          <DashboardCard title="Total Earned" count="3500" color="#048C04" />
        </Col>
        <Col xs={{ span: 24 }}>
          <AppCard heading="Today's Class List">
            <TodayClassListTable />
          </AppCard>
        </Col>
        <Col xs={{ span: 24 }}>
          <AppCard heading="Transaction History">
            <TodayClassListTable />
          </AppCard>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 10 }}>
          <AppCard heading="Rating Ratio">
            <PieChart />
          </AppCard>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 14 }}>
          <AppCard heading="Number of Class Taken">
            <LineChart />
          </AppCard>
        </Col>
      </Row>
    </div>
  );
};

export default TutorDashboard;
