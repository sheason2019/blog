import { Component } from "solid-js";
import Header from "../../../../common/components/header";
import PaginationComp from "../../components/pagination";
import Table, { TableColumn } from "../../components/table";
import SectionController from "./components/controller";
import CreateModal from "./components/create-modal";
import { pagination, sections } from "./signals/sections";

const columns: TableColumn[] = [
  { title: "ID", dataIndex: "SectionId" },
  { title: "版块名称", dataIndex: "SectionName" },
  { title: "操作" },
];

const Sections: Component = () => {
  return (
    <>
      <Header class="mb-4">版块管理</Header>
      <SectionController />
      <Table data={sections()} columns={columns} />
      <div class="mt-4">
        <PaginationComp pagination={pagination()} />
      </div>
      <CreateModal />
    </>
  );
};

export default Sections;
