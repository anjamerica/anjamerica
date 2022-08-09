import subscriber from "../models/subscribers";

export const postSubscribers = async (req, res) => {

    try {
        const { email, status } = req.body
        if (!email) { return res.status(400).json({ error: "email required", status: 400 }); }
        const createSubscriber = await subscriber.create({ email })
        res.status(200).json({ success: "successfully created", status: 200, payload: createSubscriber })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, error: "internal server error", errorMessage: error.message })
    }

}
export const getSubscribers = async (req, res) => {

    try {
        const getSubscribers = await subscriber.find()
        res.status(200).json({ success: "get all subscribers", status: 200, payload: getSubscribers })
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 500, error: "internal server error", errorMessage: error.message })
    }

}