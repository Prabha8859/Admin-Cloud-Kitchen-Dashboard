import PageHeader from "../components/common/PageHeader";
import Card from "../components/common/Card";

export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Admin overview & statistics"
      />

      <div className="grid grid-cols-4 gap-6">
        <Card title="Total Orders" value="1,240" />
        <Card title="Revenue" value="₹2,45,000" />
        <Card title="Menu Items" value="128" />
        <Card title="Users" value="860" />
      </div>
    </>
  );
}
