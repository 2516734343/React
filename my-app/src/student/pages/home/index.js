import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Route, Router, Switch } from 'react-router';
import StudentList from './student/studentList'
import CourseList from './course/CourseList'
import CourseAdd from './course/CourseAdd'
import StudentAdd from './student/studentAdd'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="menu">
            <li><NavLink to="/students">学生列表</NavLink></li>
            <li><NavLink to="/students/add">添加学生</NavLink></li>
            <li><NavLink to="/courses">课程列表</NavLink></li>
            <li><NavLink to="/courses/add">添加课程</NavLink></li>
          </ul>
        </div>
        <Switch>
          <Route path="/students" exact component={StudentList} />
          <Route path="/students/add" exact component={StudentAdd} />
          {/* <Route path="/students/:sno" exact component={StudentDetail} /> */}
          <Route path="/courses" exact component={CourseList} />
          <Route path="/courses/add" exact component={CourseAdd} />
        </Switch>
      </div>
    )
  }
}
