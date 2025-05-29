import { PlusOutlined } from "@ant-design/icons";
import { ProTable } from "@ant-design/pro-components";
import { Button, Space, Tag } from "antd";
import { useRef } from "react";
import { waitTime } from "./utils";
import * as userApi from "@/api/user";

const columns = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "用户名",
    dataIndex: "username",
    copyable: true,
    ellipsis: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    title: "邮箱",
    dataIndex: "email",
    copyable: true,
    ellipsis: true,
  },
  {
    title: "电话",
    dataIndex: "phone",
    copyable: true,
    ellipsis: true,
  },
  {
    disable: true,
    title: "状态",
    dataIndex: "status",
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: "select",
    valueEnum: {
      0: {
        text: "禁用",
        status: "Error",
      },
      1: {
        text: "启用",
        status: "Success",
        disabled: true,
      },
    },
    hideInSearch: true,
  },
  {
    title: "创建时间",
    key: "showTime",
    dataIndex: "createdAt",
    valueType: "dateTime",
    hideInSearch: true,
  },
  {
    title: "更新时间",
    key: "showTime",
    dataIndex: "updatedAt",
    valueType: "dateTime",
    hideInSearch: true,
  },

  {
    title: "操作",
    valueType: "option",
    key: "option",
    render: (text, record, _, action) => [
      <a
        key="edit"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} key="view-detail">
        查看
      </a>,
      <a onClick={() => {}} key="delete" style={{ color: "red" }}>
        删除
      </a>,
    ],
  },
];

const UserList = () => {
  const actionRef = useRef(null);
  const handleQuery = async (params) => {
    await waitTime(500);
    return userApi.userList(params).then((res) => {
      return {
        success: true,
        total: res.data,
        data: res.data.list,
      };
    });
  };
  return (
    <ProTable
      columns={columns}
      actionRef={actionRef}
      cardBordered
      editable={false}
      request={handleQuery}
      scroll={{ y: "calc(100vh - 430px)" }}
      columnsState={{
        persistenceKey: "userMan",
        persistenceType: "localStorage",
        defaultValue: {
          option: { fixed: "right", disable: true },
        },
      }}
      rowKey="id"
      search={{
        labelWidth: "auto",
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        syncToUrl: (values, type) => {
          if (type === "get") {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        showSizeChanger: true,
      }}
      dateFormatter="string"
      headerTitle="用户管理"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            console.log("actionRef", actionRef);

            actionRef.current?.reload();
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  );
};

export default UserList;
