import React from "react";
import { Table } from "antd";

const OnlineTutorsTable = () => {
  const columns = [
    {
      title: "Teacher Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Institution Name",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Department Name",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Subject",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Rating",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />;
};

export default OnlineTutorsTable;
