exports.success = (data) => {

      return (
            {
                  "status": data.status,
                  "successMessage":data.successMessage,
                  "data": data.payload
            }


      )


}

exports.errors = (data) => {

      return (
            {
                  "status":data.status,
                  "errorMessage":data.errorMessage,
                  "error":data.error
            }


      )


}