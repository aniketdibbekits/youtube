for setup routing
# npm i react-router-dom
 create router in App.js
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]
}])

in app 
 <SideBar/>
  <Outlet/>

#Debouncing 
eg youtube
whenever you search it shows suggestion and it calls api after defined time
it affects performance. if eg iphone=6 letters means 6 api calls and if 1000 peoples make api calls it affets performance,but with debouncing we can restrict this

if d/b 2 key strokes is greater that 200ms make api call if less then decline
 