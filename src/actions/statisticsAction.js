
import actionApi from '../constants/actionApi';
import dispatchType from '../constants/dispatchType';
const TYPE = dispatchType.statistics;
const url = actionApi.statistics;

export default {
  statisticsCustomerNumInit(time) {
    return function (dispatch) {
    	const _url = `${url.statisticsCustomerNumInit + time}/`;
      fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsCustomerNumInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
  statisticsAvgInit(time) {
    return function (dispatch) {
      const _url = `${url.statisticsAvgInit + time}/`;
      fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsAvgInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
  statisticsPeakInit(time) {
    return function (dispatch) {
      const _url = `${url.statisticsPeakInit + time}/`;
      fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsPeakInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
  statisticsDeepInit(time) {
    return function (dispatch) {
      const _url = `${url.statisticsDeepInit + time}/`;
      fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsDeepInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
  statisticsOutInit(time) {
    return function (dispatch) {
      const _url = `${url.statisticsOutInit + time}/`;
      fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsOutInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
  statisticsOldOrNewInit(time) {
    return function (dispatch) {
    	const _url = `${url.statisticsOldOrNewInit + time}/`;
      fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsOldOrNewInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
  statisticsTimeSectionInit(time) {
  	return function (dispatch) {
    	const _url = `${url.statisticsTimeSectionInit + time}/`;
    fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsTimeSectionInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
  };
  },
  statisticsCycleInit(time) {
  	return function (dispatch) {
    	const _url = `${url.statisticsCycleInit + time}/`;
    fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsCycleInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
  };
  },
  statisticsActiveInit(time) {
  	return function (dispatch) {
    	const _url = `${url.statisticsActiveInit + time}/`;
    fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsActiveInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
  };
  },
  statisticsStayInit(time) {
    return function (dispatch) {
      const _url = `${url.statisticsStayInit + time}/`;
      fetch(_url).then(data => data.json())
        .then((data) => {
          dispatch({
            type: TYPE.statisticsStayInit,
            payload: data
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
  },
};

