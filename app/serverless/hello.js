exports.handler = function(event, context, callback) {
    console.log(JSON.stringify({ event, context }, null, 2))

    callback(null, {
        statusCode: 200,
        body: "Hello"
    })
}
