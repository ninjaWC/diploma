import { Link } from 'react-router-dom';
import { ReactComponent as DetailsIcon } from '../../../assets/main/icons/weather/details.svg';
import { ReactComponent as ChartPic } from '../../../assets/main/image/Chart-container.svg';


export const EquipmentStatus = () => {
    return (
        <div className="dashboard-overview__equipment-status bora">
                          <div className="dashboard-overview__equipment-status-top">
                              <span className="dashboard-overview__equipment-status-top-title title">Equipment Status</span>
                              <Link to="/equipment-list">
                                <span className="dashboard-overview__equipment-status-top-link details">
                                  View Details
                                  <DetailsIcon/>
                                </span>
                              </Link>
                          </div>
                          <div className="dashboard-overview__equipment-status-chart">
                            <ChartPic/>
                          </div>
                          <div className="dashboard-overview__equipment-status-bottom">
                            <div className="bottom__table-title">
                              <span>Status</span>
                              <span>Issues</span>
                              <span>%</span>
                            </div>
                            <div className="bottom__table-data">
                              <div className="bottom__table-data-row">
                                <span className="todo">
                                  <span></span>
                                  <span>To Do</span>
                                </span>
                                <span>28</span>
                                <span>62.5%</span>
                              </div>
                              <div className="bottom__table-data-row">
                                <span className="progress">
                                  <span></span>
                                  <span>In Progress</span>
                                </span>
                                <span>12</span>
                                <span>25%</span>
                              </div>
                              <div className="bottom__table-data-row">
                                <span className="done">
                                  <span></span>
                                  <span>Done</span>
                                </span>
                                <span>6</span>
                                <span>12.5%</span>
                              </div>
                              {/* bottom__table-data */}
                            </div>
                          </div>
                        </div>
    );
}