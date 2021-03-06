import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import Calendar from '../calendar';
import statisticsAction from '../../actions/statisticsAction';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/dataZoom';
const FaQuestion = require('react-icons/lib/fa/question');


class _timeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statisticsTimeSectionInit: '',
      resizeHandler: '',
      time: '',
      timeList: '',
      numList: ''
    };
  }
  componentDidMount() {
    this.state.time = this.props.time;
    this.props.statisticsTimeSectionInit(this.state.time);

    const statisticsTimeSectionChart = ReactDOM.findDOMNode(this.refs.statisticsTimeSectionChart);
	  this.state.statisticsTimeSectionChart = echarts.init(statisticsTimeSectionChart);
    this.state.statisticsTimeSectionChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.statisticsTimeSectionChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.statisticsTimeSectionInit(nextProps.time);
      return;
    }
    const timeSection = nextProps.timeSection.toJS();
    if (timeSection.series && timeSection.series[0] && timeSection.series[0].data && timeSection.series[0].data[0]) {
      const timeList = timeSection.xAxis[0].data;
      const numList = timeSection.series[0].data;
      this.setState({timeList, numList});
      this.state.statisticsTimeSectionChart.setOption(timeSection);
      this.state.statisticsTimeSectionChart.hideLoading();
    }
  }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')

	// }
	// componentDidUpdate(){
		// console.log('-=componentDidUpdate')

	// }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.statisticsTimeSectionChart.dispose();
    this.props.stateDefault();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    let {timeList, numList, time} = this.state;
    const rows = [];
    switch (time) {
    	case 'day':time = '最近一天'; break;
    	case 'week':time = '最近一周'; break;
    	case 'month':time = '最近一月'; break;
    	case 'year':time = '最近一年'; break;
    	case 'more':time = '开店以来'; break;
    	default:const arr = time.split(',');
    		time = arr.join(' 至 ');
    }
    if (timeList) {
      timeList.forEach((item, i) => {
        rows.push(<tr key={i}><td>{time}</td><td>{timeList[i]}</td><td>{numList[i]}</td></tr>);
      });
    }
    return	(<div>
      <div className="panel">
        <div className="panelHead">各时间段人数&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示商城在一天各时间段的平均人数<br /></p></div></div>
        <div className="panelBody">
          <div className="statisticsTimeSectionChart" ref="statisticsTimeSectionChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">各时间段人数明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间范围</th><th>时间段</th><th>人数</th></tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>);
  }
}


const mapStateToProps = state => ({
  timeSection: state.getIn(['c', 'timeSection'])
});
export default connect(mapStateToProps, statisticsAction)(_timeSection);
