exports.success = (data) => {

      return (
            {
                  "status": data.status,
                  "successMessage":data.successMessage,
                  "data": data.data
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