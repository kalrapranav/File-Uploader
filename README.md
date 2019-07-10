## HTTP   
The Hypertext Transfer Protocol (HTTP) is designed to enable communications between clients and servers.  
  
HTTP works as a request-response protocol between a client and server.  
  
A web browser may be the client, and an application on a computer that hosts a web site may be the server.  
  
## HTTP Methods
* GET
* POST
* PUT
* HEAD
* DELETE
* PATCH
* OPTIONS

## The GET Method
**GET is used to request data from a specified resource.**   
**GET is one of the most common HTTP methods.**  
Note that the query string (name/value pairs) is sent in the URL of a GET request:  

> /test/demo_form.php?name1=value1&name2=value2

## The POST Method
**POST is used to send data to a server to create/update a resource.**  
The data sent to the server with POST is stored in the request body of the HTTP request:  

> POST /test/demo_form.php HTTP/1.1  
> Host: w3schools.com  
> name1=value1&name2=value2  

## The PUT Method  
**PUT is used to send data to a server to create/update a resource.**  

## The HEAD Method
**HEAD is almost identical to GET, but without the response body.**

## The DELETE Method
**The DELETE method deletes the specified resource.**
  
## The OPTIONS Method
**The OPTIONS method describes the communication options for the target resource.**