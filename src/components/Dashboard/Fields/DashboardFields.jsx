import { ReactComponent as DetailsIcon } from '../../../assets/main/icons/weather/details.svg';
import { ReactComponent as GraphPic } from '../../../assets/main/image/Rose Chart.svg';
import {Link} from 'react-router-dom';


export const DashboardFields = () => {
    return (
        <div className="dashboard-overview__fields bora">
                          <div className="dashboard-overview__fields-top">
                              <span className="dashboard-overview__fields-top-title title">Fields Overview</span>
                              <span className="dashboard-overview__fields-top-link details">
                                <Link to="/fields">
                                  View Details
                                  <DetailsIcon/>
                                </Link>
                              </span>
                          </div>
                          <div className="dashboard-overview__fields-bottom">
                            <div className="dashboard-overview__fields-bottom-table">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Field</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Field 1</td>
                                    <td>6,806</td>
                                  </tr>
                                  <tr>
                                    <td>Field 2</td>
                                    <td>2,000</td>
                                  </tr>
                                  <tr>
                                    <td>Field 3</td>
                                    <td>3,474</td>
                                  </tr>
                                  <tr>
                                    <td>Field 4</td>
                                    <td>7,307</td>
                                  </tr>
                                  <tr>
                                    <td>Field 5</td>
                                    <td>6,264</td>
                                  </tr>
                                  <tr>
                                    <td>Field 6</td>
                                    <td>5,482</td>
                                  </tr>
                                  <tr>
                                    <td>Field 7</td>
                                    <td>2,728</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="dashboard-overview__fields-bottom-graph">
                              <GraphPic/>
                            </div>
                          </div>
                        </div>
    );
}