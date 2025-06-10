import { DashboardWeather } from '../Dashboard/Weather/DashboardWeather';
import { DashboardFields } from '../Dashboard/Fields/DashboardFields';
import { EquipmentStatus } from '../Dashboard/EquipmentStatus/EquipmentStatus';

export const DashboardOverview = () => {
    return(
        <div className="dashboard-overview">
            <DashboardWeather/>
            <DashboardFields/>
            <EquipmentStatus/>
        </div>
    );
}