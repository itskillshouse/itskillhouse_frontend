import React, { useEffect, useState } from "react";
import { getAdminDashboardStats } from "../services/authService";

import SubscriberTable from "../pages/newsLetter/SubscriberList";
import NewsletterForm from "../pages/newsLetter/NewsletterForm";
import AnalyticsChart from "../pages/newsLetter/AnalyticsChart";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("subscribers");
  const [stats, setStats] = useState(null);
  const [statsError, setStatsError] = useState("");

  useEffect(() => {
    let active = true;

    getAdminDashboardStats()
      .then((data) => {
        if (active) setStats(data.stats);
      })
      .catch((error) => {
        if (active) {
          setStatsError(
            error.response?.data?.message || "Failed to load dashboard stats"
          );
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const cards = [
    { label: "Subscribers", key: "subscribers", color: "text-blue-600" },
    { label: "Newsletters Sent", key: "newsletters", color: "text-green-600" },
    { label: "Blogs", key: "blogs", color: "text-purple-600" },
    { label: "Inquiries", key: "inquiries", color: "text-orange-600" },
    { label: "Students", key: "students", color: "text-cyan-600" },
    { label: "Portfolio Projects", key: "portfolios", color: "text-pink-600" },
    { label: "Testimonials", key: "testimonials", color: "text-indigo-600" },
    { label: "Active Batches", key: "activeBatches", color: "text-teal-600" },
  ];

  return (
    <div className="p-4 space-y-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Overview</h2>
        {statsError && (
          <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-red-700">
            {statsError}
          </p>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ label, key, color }) => (
            <div key={key} className="rounded-lg bg-white p-5 shadow">
              <h3 className="text-sm font-medium text-gray-600">{label}</h3>
              <p className={`mt-2 text-3xl font-bold ${color}`}>
                {stats ? (stats[key] ?? 0).toLocaleString() : "—"}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "subscribers" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("subscribers")}
        >
          Subscribers
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "send" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("send")}
        >
          Send Newsletter
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "analytics" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 shadow rounded-lg">
        {activeTab === "subscribers" && <SubscriberTable />}
        {activeTab === "send" && <NewsletterForm />}
        {activeTab === "analytics" && <AnalyticsChart />}
      </div>
    </div>
  );
};

export default AdminDashboard;
