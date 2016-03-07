package com.hantsylabs.grails.example.domain

import grails.rest.Resource;

@Resource()
class Comment {
	
	String text
	String author


    static constraints = {
		text blank:false
		author blank:false   
    }
}
