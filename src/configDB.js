const dotenv = require('dotenv').config();

const config = {
    firebase:{
        "type": "service_account",
        "project_id": "ecommercecoder-4454f",
        "private_key_id": process.env.FIREBASEprivatekeyid,
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCTwQTA0pE48xYS\nyJmeAcWSp6QglyVOtzsJXzlwiDb6/GHlp4Fj0waPWJMfcNOvhZRytSyZqiT68qta\n6WvyoZRo3jeTV+acj6ORp+/uKcUO0wvqs4iaCykYQrPFixq+8YPOCCs0f97YmhaM\nMTyPGGQYv/qCMA+yw9NYmod7l++iKdlrE7ZmjYFvilZYTWpoqEy2Jt49JsUmC71/\nZrVXWpUSz6G1scKDsn6WFYDJ1I2UsTEIfXk/zUQJoXZYhYkLrbhn89QyROiDwjg0\nZJnk16vTO9Aoy7PhR1Y7lyeFo9ckYfaxpNyc6pzsBbVkXwWxbEl7ddn4xQ1COi9z\nU47YW6oFAgMBAAECggEACvpQFVh/wDS1auNbIIV+rbEFbYN1WuYbvYxE6wK/3QGD\n74l0wFs1NVDOK4uZOsUIvMYPwIIG+dsuVpSZt97/9ROvmuOwx2iXrVKGLdKOKNYO\n4FsC9vkFzl7kVvTJIa81jQkH1sB6aOr36mYdGv+jrkATR3l1LSHGEeL3Vnw5Knnn\nDrinSxJ8eCr0Kpj58jdzu9kTN1O5Hn/BxhG0SOSzk9i4crlsbTt3CG1qC4o4rb5/\nLs6SzBaqOPx75cNGq8BcbHbOjcLdqPO5SVme9sle/D5I9SX1MXk/QGi73a74NXj5\nIWx9DK3nhU0XElfwMtAamHkDGp5/xZZxXC6/etckSQKBgQDPhLfzzwRinre0qjDx\nAJUFKb7phvv4mAi8yHQzRC10IaxP64T5fzZtwBFf88qZqcUmqidIXGCQJ8eOv6e7\nYUvh5Ke69rqO/4D6ULiQvJ/xpZl44Om4SPwCqTQH+aMF2w94/gZdwsov4eWn8SBi\nqsTBsQpAnggFZyKTzUGgW+sH+QKBgQC2RebwJjjgN5+un7zWnJBAodp//MqhHcIB\nhopJQz5ZNSd1GL3bh2AYXB/IuRvUdBSedLGc9egbEMbJZJ/Le3UcTVErzRJgyBHB\nD0ZJdgLFJbG8HBRHaVJfbrCNLtKs9dLmTf+1MUWZVhBQJRQaALXw1Mj3yPt+zURT\nXWfsHZatbQKBgEZR8wPrYtEId7gA9BS23ciiHM+FrlzPKCbQxo+Yys5PmtR6OtVR\nBmCqdTjOpBjuLqCriCQ9KXuv/y+gQnZ8wfoKQcxZT16ltk8ci26AfLKmKxuLG6gX\nE07Th44sSdHyKYwWiJG9MEaJhgki7JaCx6nbFF5RLualzFHJfDOa8koBAoGBAIPj\nbqgkMBFljkCvytdLcEGkG9NyWjhcrO2nqVY7ttib0pIzNeWsPgdCWalG7/E5kVXa\nwE3/zVQQPpapHcsB6Qpyk6Jq/7pR6i7U25n6LyTyEno3oyDM/9KX6F4wHDcUpOcK\nV1WHcoHyOVmUisgJ7Zx2i3hn0Dq/Uooz0yeRfV69AoGBAIHjci8RFopfC8IIJdFC\nR7du8HrW2vWBsZj1i6dW+qJNRx07csL57pO3eBKQTKCA9IJJsATIxsOzC0F+4zL6\nQXcHFjG+KIg7XcJg7wCGqGNeY7Fx4yH5hx/dM3TA0OIYYmmDLxhkY+mfjE1CFEgb\nsmUtg7xzBQhYpmm3a7XFnonF\n-----END PRIVATE KEY-----\n",
        "client_email": process.env.FIREBASEclientemail,
        "client_id": process.env.FIREBASEclientid,
        "auth_uri": process.env.FIREBASEauthuri,
        "token_uri": process.env.FIREBASEtokenuri,
        "auth_provider_x509_cert_url": process.env.FIREBASEauthproviderx509certurl,
        "client_x509_cert_url": process.env.FIREBASEclientx509certurl
      },
      mongodb: {
        cnxStr: process.env.MONGODBcnxStr,
    },
      
}

module.exports = config;