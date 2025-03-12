import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Erorr in connecting to DB" });
  }

  if (req.method === "GET") {
    const id = req.query.customerId;

    try {
      const customer = await Customer.find({ _id: id });
      res.status(200).json({ status: "success", data: customer });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "failed", message: "Erorr in connecting to DB" });
    }
  }
}
