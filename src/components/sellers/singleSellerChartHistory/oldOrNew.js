import React from 'react';
import ReactDOM from 'react-dom';
import redux from 'redux';
import {connect, Provider} from 'react-redux';
import Immutable from 'immutable';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import sellersAction from '../../../actions/sellersAction';
const FaQuestion = require('react-icons/lib/fa/question');

class _stayBar extends React.Component {
  static propTypes = {
    singleSellerOldOrNew: React.PropTypes.func.isRequired,
    OldOrNew: React.PropTypes.instanceOf(Immutable.Map)
  }
  constructor(props) {
    super(props);
    this.state = {
      singleSellerOldOrNewChart: '',
      resizeHandler: '',
      time: '',
      timeList: '',
      oldNumList: '',
      newNumList: '',
      percentList: ''
    };
  }
  componentDidMount() {
		// debugger
    this.state.time = this.props.time;
    this.props.singleSellerOldOrNew(this.props.params.id, this.state.time);

    const singleSellerOldOrNewChart = ReactDOM.findDOMNode(this.refs.singleSellerOldOrNewChart);
	  this.state.singleSellerOldOrNewChart = echarts.init(singleSellerOldOrNewChart);
    this.state.singleSellerOldOrNewChart.showLoading();
    window.addEventListener('resize', this.resizeFun);
  }
  resizeFun=() => {
    if (this.state.resizeHandler) {
      clearTimeout(this.state.resizeHandler);
    }
    this.state.resizeHandler = setTimeout(() => {
      this.state.singleSellerOldOrNewChart.resize();
    }, 100);
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.state.time != nextProps.time) {
      this.setState({time: nextProps.time});
      this.props.singleSellerOldOrNew(nextProps.params.id, nextProps.time);
      return;
    }
    const oldOrNew = nextProps.oldOrNew.toJS();
    if (oldOrNew.series && oldOrNew.series[0] && oldOrNew.series[0].data && oldOrNew.series[0].data[0]) {
      const timeList = oldOrNew.xAxis[0].data;
      const newNumList = oldOrNew.series[0].data;
      const oldNumList = oldOrNew.series[1].data;
      this.setState({timeList, newNumList, oldNumList});
      this.state.singleSellerOldOrNewChart.setOption(oldOrNew);
      this.state.singleSellerOldOrNewChart.hideLoading();
    }
  }
	// componentDidUpdate(){
		// debugger

	// }
	// componentWillUpdate(nextProps){
		// console.log('-=componentWillUpdate')

	// }
  componentWillUnmount() {
      // 切换路由销毁echarts实例
    this.state.singleSellerOldOrNewChart.dispose();
    window.removeEventListener('resize', this.resizeFun);
  }
  render() {
    const {timeList, oldNumList, newNumList} = this.state;
    const rows = [];
    let percent = '';
    let total = 0;
    if (timeList) {
      timeList.forEach((item, i) => {
        	total = parseInt(newNumList[i]) + parseInt(oldNumList[i]);
        	if (!total) {
        		percent = 0;
        	} else {
        		percent = parseInt(parseInt(newNumList[i]) / total * 100);
        	}
        rows.push(<tr key={i}><td>{timeList[i]}</td><td>{newNumList[i]}</td><td>{oldNumList[i]}</td><td>{percent}%</td></tr>);
      });
    }
    return (<div>
      <div className="panel">
        <div className="panelHead">新老顾客&nbsp;<FaQuestion className="questionMark" />
          <div className="messageMark"><p>展示在一定时间内店铺的新老顾客数量<br /><strong>新顾客</strong>：第一次进入店铺的顾客<br /><strong>老顾客</strong>：不是第一次进入店铺的顾客<br /></p></div></div>
        <div className="panelBody">
          <div className="singleSellerOldOrNewChart" ref="singleSellerOldOrNewChart" />
        </div>
      </div>
      <div className="panel">
        <div className="panelHead">新老顾客明细</div>
        <div className="panelBody">
          <table className="Table">
            <thead>
              <tr><th>时间</th><th>新顾客</th><th>老顾客</th><th>新顾客比例</th></tr>
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
  oldOrNew: state.getIn(['b', 'oldOrNew'])
});


export default connect(mapStateToProps, sellersAction)(_stayBar);
