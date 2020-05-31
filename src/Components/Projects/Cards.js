import React from 'react';
import Project from './Card';
import './Card.css'

export default function Cards() {
    return (
        <div className="row container m-auto">
            <Project
                src="http://srdeng.com/images/picture004.jpg"
                alt="SR 574"
                title="SR 574 (Martin Luther King Jr. Blvd)"
                text="4.8 miles of Roadway Resurfacing & Rehabilitation for the Florida Department of Transportation in Tampa, FL. Project also included signals, sidewalk addition, and lighting design. 2012"
                />
            <Project 
                src="http://srdeng.com/images/project1.png"
                alt="I-275"
                title="I-275 (SR93)/US-19 (SR 55)"
                text="1.2 miles of Roadway Resurfacing & Rehabilitation for the Florida Department of Transportation in St. Petersburg, FL. Project also includes safety and drainage improvements. 2011
                "
                />
            <Project 
                src="http://srdeng.com/images/project2.png"
                alt="SR 574"
                title="SR 574 (Dr. Martin Luther King Jr. Blvd.)"
                text="2 miles of Roadway Resurfacing & Rehabilitation for the Florida Department of Transportation, Tampa, FL. Project also includes signals, bridge, and drainage improvements. 2010
                "
                />
            <Project 
                src="http://srdeng.com/images/project4.png"
                alt="Palmetto High School"
                title="Palmetto High School"
                text="Major school renovations in Manatee, FL. School expansion and renovations which included additional sporting facilities, classrooms, and drainage ponds. 2010"
                />
        </div>
    )
}
