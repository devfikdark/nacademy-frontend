import { Button, Card, Col, Row, Typography } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import moment from "moment";

const { Title } = Typography;

const UpcomingClassCard = ({ info }) => {
  return (
    <Card className="card">
      <Row gutter={[8, 8]}>
        <Col xs={{ span: 8 }}>
          <Title level={5} className="primary-color">
            Class Name:
          </Title>
        </Col>
        <Col xs={{ span: 16 }}>
          <Title level={5}>{info.agenda} </Title>
        </Col>
        <Col xs={{ span: 8 }}>
          <Title level={5} className="primary-color">
            Date:
          </Title>
        </Col>
        <Col xs={{ span: 16 }}>
          <Title level={5}>{moment(info.date).format("LL")}</Title>
        </Col>
        <Col xs={{ span: 8 }}>
          <Title level={5} className="primary-color">
            Start Time:
          </Title>
        </Col>
        <Col xs={{ span: 16 }}>
          <Title level={5}>{info.start_time}</Title>
        </Col>
        <Col xs={{ span: 8 }}>
          <Title level={5} className="primary-color">
            End Time:
          </Title>
        </Col>
        <Col xs={{ span: 16 }}>
          <Title level={5}>{info.end_time}</Title>
        </Col>
        <Col xs={{ span: 8 }}>
          <Title level={5} className="primary-color">
            Student Name:
          </Title>
        </Col>
        <Col xs={{ span: 16 }}>
          <Title level={5}>{info.name}</Title>
        </Col>
        <Col xs={{ span: 8 }}>
          <Title level={5} className="primary-color">
            Subject Name:
          </Title>
        </Col>
        <Col xs={{ span: 16 }}>
          <Title level={5}>{info.subject} </Title>
        </Col>
        <Col xs={{ span: 24 }}>
          <Button block type="primary" icon={<CalendarFilled />} className="bg white-text" size="large">
            Reschedule Class Time
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default UpcomingClassCard;
