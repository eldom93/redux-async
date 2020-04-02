//actions
function counter(state = "", action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case 'INITIATION':
      var x = document.getElementById("un").value;
      var form = document.getElementById("form").style;
      var loggedIn = document.getElementById("in").style;
      var welcome = document.getElementById("welcome").style;
      
      var y = "Hey ";
      var z = "Incorrect Username or Password"
      var q = " Welcome to your account... "
      if (x=="nyera93" || x=="samy1" || x=="fardosa87" || x=="johndoe" || x=="mom98" || x=="nyerae"){
       return  (q.display = "block", x.display = "block", q.display = "block", form.display = "none", loggedIn.display ="block", "<br>" + y.fontcolor("green").bold() + x.fontcolor("green").bold() + q.fontcolor("green").bold()) + state;
      }
      else {
      return  ("<br>" + z.bold()) + state;
      }
      case 'RESET':
      state = " ";
      return state
    default:
      return state
  }
}

//store
var store = Redux.createStore(counter)
var valueEl = document.getElementById('output')

function render() {
  valueEl.innerHTML = store.getState().toString()
}
render()
store.subscribe(render)

//reducers
document.getElementById('botResponse').addEventListener('click', function() {
  setTimeout(function() {
    store.dispatch({
      type: 'INITIATION'
    })
  }, 700)
})

document.getElementById('in').addEventListener('click', function() {
  setTimeout(function() {
    store.dispatch({
      type: 'RESET'
    })
  }, 700)
})


document.getElementById('un').addEventListener('keypress', function handle(e){
        if(e.keyCode === 13) setTimeout(function(){
            store.dispatch({
      type: 'INITIATION'
    })
        }, 700)
    }
)


document.getElementById('in').addEventListener('click', function() {
  setTimeout(function() {
    store.dispatch({
      type: 'RESET'
    })
  }, 700)
})
