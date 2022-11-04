import { Component } from "solid-js";
import { Section } from "../../../../api-lib/blog-client";
import Button from "../../../../common/components/button";
import Header from "../../../../common/components/header";
import PaginationComp from "../../components/pagination";
import Table, { TableColumn } from "../../components/table";
import SectionController from "./components/controller";
import CreateModal from "./components/create-modal";
import DeleteConfirmModal from "./components/delete-confirm-modal";
import {
  fetchSections,
  pagination,
  sections,
  setCurrentSection,
  setShowDeleteConfirm,
} from "./signals/sections";

const handleOpenDeleteConfirm = (section: Section) => {
  setCurrentSection(section);
  setShowDeleteConfirm(true);
};

const columns: TableColumn[] = [
  { title: "ID", dataIndex: "SectionId" },
  { title: "版块名称", dataIndex: "SectionName" },
  {
    title: "操作",
    render: (row: Section, col) => (
      <div>
        <Button
          variant="error"
          class="py-0.5 mx-0.5"
          onClick={() => handleOpenDeleteConfirm(row)}
        >
          删除
        </Button>
      </div>
    ),
  },
];

const Sections: Component = () => {
  fetchSections();

  return (
    <>
      <Header class="mb-4">版块管理</Header>
      <SectionController />
      <Table data={sections()} columns={columns} />
      <div class="mt-4">
        <PaginationComp pagination={pagination()} />
      </div>
      <CreateModal />
      <DeleteConfirmModal />
    </>
  );
};

export default Sections;
