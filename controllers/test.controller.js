const test = async (request, response) => {
    try {
      response.status(200).send({
        message: 'Success'
      });
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    }
}

module.exports = {
    test: test
}