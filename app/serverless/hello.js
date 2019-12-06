exports.handler = function(event, context, callback) {
    console.log(JSON.stringify({ event, context }, null, 2))

    const { user } = context.clientContext
    if (!user) {
        return callback(null, {
            statusCode: 401,
            body: `woops, you shouldn't be here!`
        })
    }
    // Put your custom request to your api backend here.
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify(user)
    })
}
