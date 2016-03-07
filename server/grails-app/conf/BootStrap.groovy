import org.junit.Before;

import grails.plugin.springsecurity.SecurityFilterPosition;
import grails.plugin.springsecurity.SpringSecurityUtils;

import com.hantsylabs.grails.example.domain.Comment
import com.hantsylabs.grails.example.security.Authority
import com.hantsylabs.grails.example.security.Person
import com.hantsylabs.grails.example.security.PersonAuthority

class BootStrap {

    def init = { servletContext ->
		new Comment(text:"Java Persistence with Hibernate", author:"David").save()
		new Comment(text:"Spring Live", author:"Frank").save()
		
		def person =new Person(username:"test", password:"test123")
		person.save()
		
		def roleUser=new Authority(authority:"ROLE_USER")
		roleUser.save()
		
		new PersonAuthority(person:person, authority:roleUser).save()
		
//		for (String url in [
//			'/', '/index', '/index.gsp', '/**/favicon.ico',
//			'/**/js/**', '/**/css/**', '/**/images/**',
//			'/login', '/login.*', '/login/*',
//			'/logout', '/logout.*', '/logout/*']) {
//		 new Requestmap(url: url, configAttribute: 'permitAll').save()
//	  }
	//	SpringSecurityUtils.clientRegisterFilter("customBasicAuthenticationFilter", SecurityFilterPosition.BASIC_AUTH_FILTER.order+1)
	//	SpringSecurityUtils.clientRegisterFilter("statelessSecurityContextPersistenceFilter", SecurityFilterPosition.SECURITY_CONTEXT_FILTER.order+1)
    }
    def destroy = {
    }
}
