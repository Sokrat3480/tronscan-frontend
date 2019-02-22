webpackJsonp([14],{2294:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,o){try{var i=t[r](o),l=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(l).then(function(e){a("next",e)},function(e){a("throw",e)});e(l)}return a("next")})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function A(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(10),u=a(s),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=n(0),f=a(E),g=n(18),m=n(12),p=n(434),v=a(p),C=n(15),h=n(108),B=n(23),w=n(2885),x=n(29),y=a(x),R=function(e){function t(){i(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={volume:0,previousVolume:0,totalAccounts:0,previousTotalAccounts:0,transactionLastDay:0,previousTransactionLastDay:0,txOverviewStats:null},e}return A(t,e),d(t,[{key:"load",value:function(){function e(){return t.apply(this,arguments)}var t=o(u.default.mark(function e(){var t,n,a,r,o,i,l,A;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.default.get("https://api.coinmarketcap.com/v1/ticker/tron/");case 2:return t=e.sent,n=t.data[0]["24h_volume_usd"],e.next=6,C.Client.getAccounts();case 6:return a=e.sent,e.next=9,C.Client.getTxOverviewStats();case 9:r=e.sent,o=r.txOverviewStats,i=[];for(l in o)A=parseInt(l),0===A?i.push(o[A]):i.push({date:o[A].date,totalTransaction:o[A].totalTransaction-o[A-1].totalTransaction,avgBlockTime:o[A].avgBlockTime,avgBlockSize:o[A].avgBlockSize,totalBlockCount:o[A].totalBlockCount-o[A-1].totalBlockCount,newAddressSeen:o[A].newAddressSeen});this.setState(function(e){return{volume:n,previousVolume:e.volume,transactionLastDay:i[i.length-1].totalTransaction,previousTransactionLastDay:e.transactionLastDay,txOverviewStats:i}});case 14:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadAccount",value:function(){function e(){return t.apply(this,arguments)}var t=o(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Client.getAccounts();case 2:t=e.sent,this.setState(function(e){return{totalAccounts:t.total,previousTotalAccounts:e.totalAccounts}});case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"componentDidMount",value:function(){var e=this;this.load(),this.loadAccount(),this.props.setInterval(function(){e.load()},36e5),this.props.setInterval(function(){e.loadAccount()},1e4)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e,t,a,o=this.props.intl,i=this.state,l=i.txOverviewStats,A=i.volume,c=i.totalAccounts,s=i.transactionLastDay;i.previousVolume,i.previousTotalAccounts,i.previousTransactionLastDay;document.getElementsByTagName("body")[0].style.height="95%";var u=.65*window.innerHeight;window.innerWidth;return f.default.createElement("main",{className:"home pb-0"},f.default.createElement("div",{className:"pb-5 mt-5"},f.default.createElement("div",{className:"container-fluid",style:{paddingLeft:"5%",paddingRight:"5%"}},f.default.createElement("div",{className:"row",style:{height:"150px"}},f.default.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},f.default.createElement("div",{className:"card h-100 widget-icon"},f.default.createElement("div",{className:"card-body",style:{lineHeight:"50px",display:"flex"}},f.default.createElement("img",{src:n(2376),style:(e={float:"left",width:"100px",height:"100px"},r(e,"float","left"),r(e,"marginTop","5px"),r(e,"marginRight","20px"),r(e,"marginLeft","10px"),e)}),f.default.createElement("div",null,f.default.createElement("strong",{style:{whiteSpace:"nowrap"}},"TRON Transactions Last Day"),f.default.createElement("h1",{className:"text-danger"},f.default.createElement(m.FormattedNumber,{value:s})))))),f.default.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},f.default.createElement("div",{className:"card h-100 widget-icon"},f.default.createElement("div",{className:"card-body",style:{lineHeight:"50px",display:"flex"}},f.default.createElement("img",{src:n(2377),style:(t={float:"left",width:"100px",height:"100px"},r(t,"float","left"),r(t,"marginTop","5px"),r(t,"marginRight","20px"),r(t,"marginLeft","10px"),t)}),f.default.createElement("div",null,f.default.createElement("strong",{style:{whiteSpace:"nowrap"}},"Total Accounts"),f.default.createElement("h1",{className:"text-danger"},f.default.createElement(v.default,{redraw:!0,separator:",",start:0,end:c,duration:1})))))),f.default.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},f.default.createElement("div",{className:"card h-100 widget-icon"},f.default.createElement("div",{className:"card-body",style:{lineHeight:"50px",display:"flex"}},f.default.createElement("img",{src:n(2378),style:(a={float:"left",width:"100px",height:"100px"},r(a,"float","left"),r(a,"marginTop","5px"),r(a,"marginRight","20px"),r(a,"marginLeft","10px"),a)}),f.default.createElement("div",null,f.default.createElement("strong",{style:{whiteSpace:"nowrap"}},"Volume (24H)\uff08$\uff09"),f.default.createElement("h1",{className:"text-danger"},f.default.createElement(v.default,{redraw:!0,separator:",",start:0,end:A,duration:1}))))))),f.default.createElement("div",{className:"row mt-4"},f.default.createElement("div",{className:"col-md-12 mt-3 mt-md-0 "},f.default.createElement("div",{className:"card"},f.default.createElement("div",{className:"card-body"},f.default.createElement("div",{style:{height:u}},null===l?f.default.createElement(B.TronLoader,null):f.default.createElement(w.LineReactTx,{style:{height:u},data:l,intl:o,source:"home"})))))))))}}]),t}(E.Component),Q={};t.default=(0,g.connect)(c,Q)((0,h.withTimers)((0,m.injectIntl)(R)))},2376:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAABYhJREFUeAHtnb1uFGcUhr9vFisSLDcASkVhpbe4BASIwqSMUkPtSI5cukSyFNdwAZTgAlHkEiL6iIIqghtgQ2MtH/M57GpNsGUNw75n5n22sHd3fs45z/todmdGlnP6yqM8frAxe/12O6eyXVLaSqVca1ebfmVV3oLAWQRmKed3OaVXJeWj6eb1o/zwyfGXK7fLTz8+7Ny7P8/zg1TSjdNLeAWBbyCQ05tJmexePnzxfHUvSwHL/n7z7/u/HpWPZXd1BZ5DoE8CuckHV67e3Mv7+x/rfi8tdo58CxL8/p4E6gGuda2W+L3+ODkCnnzspvmz+gYPCKyDwCRNfq4fx/m/E45//uY73zqwU2NJoP1OON388aemnu0i3xILT9ZFoD3Jre419VLLumpSBwKrBKp7zcl1vtV3eQ6BNRGo7jWfLzKvqSRlILBCoL3B0bQvucOxwoSnayUwrQLygICMAALK0FO4EkBAPJASQEApfoojIA5ICSCgFD/FERAHpAQQUIqf4giIA1ICCCjFT3EExAEpAQSU4qc4AuKAlAACSvFTHAFxQEoAAaX4KY6AOCAlgIBS/BRHQByQEkBAKX6KIyAOSAkgoBQ/xREQB6QEEFCKn+IIiANSAggoxU9xBMQBKQEElOKnOALigJQAAkrxUxwBcUBKAAGl+CmOgDggJYCAUvwUR0AckBJAQCl+ii//VxwoziYw/ePl2QvPWTL77e45S1lUCXAExAMpAQSU4qc4AuKAlAACSvFTHAFxQEoAAaX4KY6AOCAlgIBS/BRHQByQEkBAKX6KIyAOSAkgoBQ/xREQB6QEEFCKn+IIiANSAggoxU9xBMQBKQEElOKnOALigJQAAkrxUxwBcUBKAAGl+CnOn2WO0IEh/RkpR8ARCjikkRBwSGmNsFcEHGGoQxoJAYeU1gh7RcARhjqkkRBwSGmNsFcEHGGoQxoJAYeU1gh7RcARhjqkkbgTIkxr49Yvnaof//m003YRN5IIOKRbRd8ztB9u/9pp92MSkI/gTgqwUV8EELAvkuynEwEE7ISNjfoigIB9kWQ/nQggYCdsbNQXAQTsiyT76UQAATthY6O+CCBgXyTZTycCCNgJGxv1RQAB+yLJfjoRkNyK69TpBTbiFt8FIAVbhSNgsEDc2kFAt8SDzYuAwQJxawcB3RIPNi8CBgvErR0EdEs82LwIGCwQt3YQ0C3xYPMiYLBA3NpBQLfEg82LgMECcWsHAd0SDzYvAgYLxK0dBHRLPNi8CBgsELd2ENAt8WDzImCwQNzaQUC3xIPNi4DBAnFrBwHdEg82LwIGC8Stnfx+505xG5p54xDgCBgnC8tOENAy9jhDI2CcLCw7QUDL2OMMjYBxsrDsBAEtY48zNALGycKyEwS0jD3O0AgYJwvLThDQMvY4QyNgnCwsO0FAy9jjDI2AcbKw7AQBLWOPMzQCxsnCshMEtIw9ztAIGCcLy04Q0DL2OEMjYJwsLDtBQMvY4wyNgHGysOwEAS1jjzM0AsbJwrITBLSMPc7QCBgnC8tOENAy9jhDI2CcLCw7QUDL2OMMjYBxsrDsBAEtY48zNALGycKyEwS0jD3O0AgYJwvLThDQMvY4QyNgnCwsO6kCziwnZ+gIBGZNyvldhE7owZBA616TU3plODojByBQ3WtKykcBeqEFQwLVvWa6ef0o5fTGcH5GVhJonavuNfnhk+NJmewqe6G2H4HqXHXv5DLM5cMXz3OTD/wwMLGCQHWtOldrL68DXrl6cw8JFXF41ayOVdcWU7cnIqcfH3bu3Z/n+UEq6cbpJbyCwDcQaL/z1Y/dxZFvsaf/CVgXlMcPNmav327nVLbb/2S4lUq51r49XWzEbwhcgMCsXmOul1rq2W494ajf+b7c7hPkV6DsLo3K8gAAAABJRU5ErkJggg=="},2377:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAADNtJREFUeAHtXU2MHEcVru6No8CujIgs25ggWJtIRPImKLKEwbklgQuKNzEHAoILxBYcQoRlFAIKBkEEWSEcJAg4cAChcCK2wwns3PiLZCHMOkr42TXIaPEaS1GiXQXF8jT9zaaWmprXUzs9UzVdNV9Jq+6trnmv6quv69Wret2dKSEdLA5uujR/YbZQxWxRqD1ZVuwoj1NCUWYRARGBLFMrRZEtlcezmcpObp+ZPnk8O37VLpzZGfvn7763VbTmSsLtsq/xfyJQF4GSiAt5lh85NXP6hCljnYBHi6P5H8//5putVnHELMBzIjBMBPI8m7t99x0PH82OtiB3Qgvf/JHrvkXyaTR49IVAaVn3XfrPxTf/5cnF09DRHgFhdq+1Ws/4Ukq5RMBGYCLP74M5zuBw/Ht+4UXO+WyI+L9PBDAnfNvMrlsm3n7gxgNFURzyqYyyiYCAwI2rl1+Zz7HUIlxkFhHwjgC4l5emd493TVRABAQEwL0ci8zCNWYRAe8IgHsYAbnD4R1qKpAQAPdy6QLziEAoBEjAUEhTj4gACSjCwsxQCJCAoZCmHhEBElCEhZmhECABQyFNPSICJKAICzNDIUAChkKaekQESEARFmaGQoAEDIU09YgIkIAiLMwMhQAJGApp6hERIAFFWJgZCgESMBTS1CMiQAKKsDAzFAIkYCikqUdEgAQUYWFmKARIwFBIU4+IAAkowsLMUAiQgKGQph4RARJQhIWZoRAgAUMhTT0iAiSgCAszQyFAAoZCmnpEBEhAERZmhkKABAyFNPWICJCAIizMDIUACRgKaeoRESABRViYGQoBEjAU0tQjIkACirAwMxQCJGAopKlHRIAEFGFhZigESMBQSFOPiAAJKMLCzFAIkIChkKYeEYHrxFxmriOw9frtavqGnWrnm95d/u1Sk/mUmpyYUs+/+lv19PJP2+Vmpm5TD910RC2/vqxWWytq8bUFdX71nJpfObcuhycyAiSggMvuyVvV3rfsU+/fvE+BgFICAc2EcrrszOR72wQ1r4O0q9dWzCyelwiQgG/QAOS5860fVHeVf5pIdRhy4b8L6osLhzvIhpHzczd9QW27fps68/Kv1LNXTqjLr1+qIz6534w9AUG2j237REm+Dw3cuc+/+jv1nYuPd5HvsZ3fbpttKNi/5UD779krz6inlr4/sM7YBYwtAWES79lyX0m+Tw6lD597+dfqWEk+M4HUD72j+/vfq9dW1XPlSMg0piZYOw2DmFqTPHA2bIfj/pLYErlhor/+j690mGDcDDOTt6k/WPNKU0eq52M3An56x2faJtBnh2LUk0z6+dU/l+R7tNJEg4DHLs51XPdZzybIHhsCYpTBXAwOga8EHV9651cVRlg7SSZ6b+llg6z4HRL+f2zndvXEvx5vL+XYMlL8fywICNKZjoCPjoQ5B/kkgv9o6Ul16sovOtRWzQ+n3iBjR+GE/0megKHI992bf7A+kpl8gUm1HY4qEy0t4ZiyUjxPmoAhyAdSYH1Pm1FNEni6jyx+vsOUogzIB1NrJ5hoLMuYi9V6NMXOSqopWQLq+ZhNjBAdiZEMSzImcVCPqjmotCaoTTQI+cji4Q5ZIdoQSkeSwQi6s4e1zNJPZ2gzapIPI9mP3/MzcX4IE20vSGMJByMl0ihvpH7aXbdskgTE+ps2X3WBqfM7mNEH/3qow4yuebb/3wnRctdM9GFxfmivH+JGumsIOzVad5OOyZlgdDh2OEKnn5eRMTo6RuvWZlT/r4+Xy6iZb/zz0Q6zqkdt6cYBsW0vWsuK/ZgUAdGJ2nSF7BhpJ6QfTxekQ7CCRD7Jiw7ZNt+6kiLg/nLkAwlHmfRN0I+nK61RwkTDkbG35yDXzhtlewfVnQwBMU/C5H2UqZcZ7eXp2nWuWsLRXjS8Ynvv2ZYRy//JOCH2xD10B8B81vV0zbrCi/7USx/vmB9CtiYfyt6/dbQ3mlnfQc+TGAEx+iGYdFQJ+qvMKJwNe7Sqmh9uJJ4QbcReM0hpLvWMqu2D6k2CgJj7jTJJOyF1PF0pnvCBMnrHntfCRKeSkiDg3s0faFR/6MVoe1utH08XS0kP7PhsV7sg244n7CoUUUb0BIRXCBPYlLRRM4r6Vnm6VSZaiidsSrvr1iN+ApZPrzUlSTF/VYvRVZ5uP/GEKcwDoyfgTPkIZROStGDcT1g+RvF+4wkxP/zoC7NNaH7tOkRNQHRaE8zvmpfb+RB6P2ZUL7PYzgZ6VSK2KTv2UTBqAuJBnqalXovRVSa6ytOV4glRFmZdJzwEH/NyTNQExPJHkxJGoypPVwrL7+XpbjSecLrUGXOKmoB4X0tTUpUZhbOBeL9BwvIhG/NDabphL3I3BY+N1iNqAkpzpo02fJjlQJAnbv5hl8hheLrY9QD57LZCtrTL0lWJhmdETUC8taoJySYH6iQtGPfydAeNJ2wCDnXqEDUBpY6vA8Kgv8Fr2UAgM50q3/1i7oTgGt62hbdq2W/WghNhh1iBrJjj2nIhR5KN/BhT9uFzdxYxVhx1/uWtZ0ZSdcm0jqQiCShNJhwrVF8gyMBeHgmlO0U9UZvg0B0iBRlgL3rUSyGSmQ6NTV19URMQpnByYrJu2/v6HRaR7QfHq7ba+hI8hMIk4BBArCMCIxJep+s7SeH05naYb/295GNKEHOKfAT0/85ley8WnrcZHj/qzr98NW4CRu2ELL72d2/9v+bpdj44rnc7cGxKWo78XdNRj4C+NuGlcHpNvqasPeob4ELkLy6Km4DlHHDYSfJ0q4JKh627jrz51T/V+VljfhM1AfGpA4xWW4cUFdNkT7eKMb6sQJW+YedHPQcEGPYWVl2A4OkiBMrcPoOnO+rnjXu1B8+fxJ5IwLIH4emar0jDPA/RLWbgZxM7+vevdH6tqYl1dNUpahOMxiEerq4ZlkKa4GxUBZW6wAx9fVijf+h6m/qiHwHRGDvY02xg1bkOKDADOrWn26Rllqr6Y75qTheqyjU9PwkCnik7o58ET9d+/wrMLcxu05ZZqtplv4uwqlzT85MgILxhjAgbSZi42x8TNF+JuxEZoy6DB9RT+dhhEgQEITYyIoCk9peKmu7pSmR/aul7UnaUeckQECNCr6gQeLrmy39i8XRtVuEmin3tz2xTMgREoxCqbkeHtD3d8uOApqMSk7NhdhbaspGR3vxN08+TIiC8wmPld9Z00p6uuVwRK/nQJozgqcz9dB8lRUA0CssqMMUpeLq6k3CE82TeSOa1mM+jfiipF/CY45nrZE2JXu5V56prUoBEVdnY8qPfCakC3CRfU6KXq+raKx/TCHuPulf52K4lS0DdEV9+19fU+xr2BlVdN9dRz2FT8nrtNic3B7Qb+PTyT7o8Y7tME/8fB/IB9+QJiNHjwb8dajslTSSaVKdxId9YEBCNxHwQ228xxM/B4cANk7LZNW+65EdA3ViQENtwvXZLdNlRHbHLgRsltbW+XngmuwzTq9F45Rk+gTB9QzOebtOeborrfL36AdfGkoAaFITb37PlQLC3K2i95hGPAmB7zVw2Mq+nfj7WBETnYsEaX1oKTUSYWxBvnMytdDONPQE1KCAivkqO9zYP6yk7LVsfESiBoAgE0I478TQmJKBGwjgiYAFvvdpbfgRn0HkiSDe/eq5NPDP831A31qckoKP7MTKCkPgkxNpbS9c+C7Z107aOkRJRykh4VQZGNyyjgHjjOrdzwLp+mQRch4Ino0BgbNYBRwEudboRIAHdGLGERwRIQI/gUrQbARLQjRFLeESABPQILkW7ESAB3RixhEcESECP4FK0GwES0I0RS3hEgAT0CC5FuxEgAd0YsYRHBEhAj+BStBsBEtCNEUt4RIAE9AguRbsRIAHdGLGERwRIQI/gUrQbARLQjRFLeESABPQILkW7ESAB3RixhEcESECP4FK0GwES0I0RS3hEgAT0CC5FuxEgAd0YsYRHBEhAj+BStBsBEtCNEUt4RIAE9AguRbsRIAHdGLGERwRIQI/gUrQbARLQjRFLeESABPQILkW7ESAB3RixhEcESECP4FK0GwES0I0RS3hEgAT0CC5FuxEgAd0YsYRHBEhAj+BStBsBEtCNEUt4RCDPMrXiUT5FE4FKBMC9vCiypcoSvEAEPCIA7mEEPOtRB0UTgUoEwL08U9nJyhK8QAQ8IgDu5dtnpk+WTFzwqIeiiUAXAuAcuJcfz45fzbP8SFcJZhABjwiAc23uQcepmdMn8jyb86iPoonAOgLgGjiHjPV1wNt33/EwSbiOEU88IQCOgWtafKZP9HH//N33torWXFGoZnzPXleMx6gRwJwPZlePfLoxXQTEhYPFwU2X5i/MFqqYLYm4J8uKHeVxSv+IRyLgQqAk3ArW+crjWXi7cDgw57N/9z98NwJUv/LDoQAAAABJRU5ErkJggg=="},2378:function(e,t){e.exports="data:image/png;base64,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"},2885:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.LineReactTx=void 0;var A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),u=a(s),d=n(12),E=n(276),f=a(E),g=n(30),m=a(g);n(441),n(277),n(278),n(1029),n(1030),n(1031);var p=n(18),v=n(17),C=t.LineReactTx=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=("_"+Math.random()).replace(".","_");return n.state={lineId:"lineTx"+a},n}return i(t,e),c(t,[{key:"initLine",value:function(e){var t=(0,v.cloneDeep)(f.default),n=this.props,a=n.intl,r=n.data,o=m.default.getInstanceByDom(document.getElementById(e));void 0===o&&(o=m.default.init(document.getElementById(e))),t.overviewChart.toolbox.feature={},t.overviewChart.dataZoom=[],t.overviewChart.series[0].smooth=!0,t.overviewChart.series[0].markPoint.symbolSize=80,t.overviewChart.series[0].lineStyle={normal:{type:"solid",color:"red",width:5}},t.overviewChart.grid[0].top=120,t.overviewChart.xAxis[0].data=[],t.overviewChart.series[0].data=[],t.overviewChart.yAxis[0].name=a.formatMessage({id:"Transactions Per Day"}),t.overviewChart.yAxis[0].nameGap=40,t.overviewChart.yAxis[0].nameTextStyle={fontWeight:"bolder",fontSize:"15"},t.overviewChart.tooltip.formatter=function(e){var t=new Date(parseInt(e[0].data.date)).toLocaleString().split(" ")[0];return a.formatMessage({id:"date"})+" : "+t+"<br/>"+a.formatMessage({id:"total_transactions"})+" : "+e[0].data.totalTransaction+"<br/>"+a.formatMessage({id:"avg_blockTime"})+" : "+e[0].data.avgBlockTime+"<br/>"+a.formatMessage({id:"avg_blockSize"})+" : "+e[0].data.avgBlockSize+"<br/>"+a.formatMessage({id:"total_BlockCount"})+" : "+e[0].data.totalBlockCount+"<br/>"+a.formatMessage({id:"new_address_seen"})+" : "+e[0].data.newAddressSeen+"<br/>"},r&&r.length>0&&r.map(function(e){var n=void 0;n=A({},e,{value:e.totalTransaction}),t.overviewChart.xAxis[0].data.push(a.formatDate(e.date)),t.overviewChart.series[0].data.push(n)}),r&&0===r.length&&(t.overviewChart.title.text="No data"),o.setOption(t.overviewChart)}},{key:"componentDidMount",value:function(){this.initLine(this.state.lineId)}},{key:"componentDidUpdate",value:function(){this.initLine(this.state.lineId)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("div",{id:this.state.lineId,style:this.props.style}))}}]),t}(u.default.Component),h={};t.default=(0,p.connect)(l,h,null,{pure:!1})((0,d.injectIntl)(C))}});