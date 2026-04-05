import {  FileText} from "lucide-react";


const DriveCard = ({ drive }) => {
    const isCompleted = drive.status === "Completed";

    return (
        <div className="p-5 border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition flex justify-between items-center bg-white/10 backdrop-blur-md">

            <div className="flex gap-4 items-start">
                <div className="p-3 bg-transparent border border-white/30 rounded-full">
                    <FileText className="text-red-300" />
                </div>

                <div>
                    <h3 className="text-slate-300 font-semibold">
                        {drive.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        {drive.date}
                    </p>
                </div>
            </div>

            <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${isCompleted
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
            >
                {drive.status}
            </div>

        </div>
    );
};

export default DriveCard;