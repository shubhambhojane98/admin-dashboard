import React from "react";

const Activity = () => {
  const userActivityData = [
    {
      activityId: "activity_001",
      userId: "user_001",
      activityType: "upload",
      timestamp: "2024-10-25T14:30:00Z",
      details: {
        fileName: "document1.pdf",
        fileSize: "1.2 MB",
        pages: 10,
      },
    },
    {
      activityId: "activity_002",
      userId: "user_001",
      activityType: "view",
      timestamp: "2024-10-26T09:15:00Z",
      details: {
        fileName: "document1.pdf",
        duration: "5 min",
        pageRange: "1-5",
      },
    },
    {
      activityId: "activity_003",
      userId: "user_002",
      activityType: "edit",
      timestamp: "2024-10-27T11:45:00Z",
      details: {
        fileName: "presentation.pdf",
        changes: ["Added comments", "Highlighted text on page 3"],
      },
    },
    {
      activityId: "activity_004",
      userId: "user_001",
      activityType: "download",
      timestamp: "2024-10-28T16:00:00Z",
      details: {
        fileName: "report.pdf",
        fileSize: "2.5 MB",
      },
    },
  ];
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 p-4">
      {userActivityData.map((activity) => (
        <div
          className="border rounded-lg shadow-lg p-4 mb-4"
          key={activity.activityId}
        >
          <div className="flex mb-2">
            <p className="font-semibold text-gray-700">User ID:</p>
            <p className="px-2 text-gray-600">{activity.userId}</p>
          </div>
          <div className="flex mb-2">
            <p className="font-semibold text-gray-700">Activity Type:</p>
            <p className="px-2text-gray-600">{activity.activityType}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Activity Details:</p>
            <div className="mt-2 space-y-1">
              <p className="text-gray-600">
                File Name: {activity.details.fileName || "N/A"}
              </p>
              {activity.details.fileSize && (
                <p className="text-gray-600">
                  File Size: {activity.details.fileSize}
                </p>
              )}
              {activity.details.pageRange && (
                <p className="text-gray-600">
                  Page Range: {activity.details.pageRange}
                </p>
              )}
              {activity.details.changes &&
                activity.details.changes.length > 0 && (
                  <div>
                    <p className="text-gray-600">Changes:</p>
                    <ul className="list-disc list-inside ml-5">
                      {activity.details.changes.map((change, index) => (
                        <li key={index} className="text-gray-600">
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
