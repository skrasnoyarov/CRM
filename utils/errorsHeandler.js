const showError = (response, error) => {
    return response
        .status(500)
        .json({
            message: error.message || error,
            success: false
        });
};

module.exports = showError;