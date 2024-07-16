import { Button, DatePicker, Input, Select, Typography } from "antd";

const BookingForm = () => {
    const { RangePicker } = DatePicker;
    const { Text } = Typography;

    
    return (
        <div className="flex justify-center items-center w-full ">
            <form
                className="bg-[#1C1C1C] p-12 text-white mt-10 rounded-md grid grid-cols-2 gap-4"
                action=""
                method=""
            >
                <div className="flex flex-col">
                    <Text
                        style={{
                            color: "white",
                            marginBottom: "4px",
                        }}
                    >
                        Property
                    </Text>
                    <Select
                        defaultValue="BayHotelSingapore"
                        style={{
                            background: "#151515",
                            borderColor: "#303030",
                            color: "#B71134",
                        }}
                        options={[
                            {
                                value: "BayHotelSingapore",
                                label: "Bay Hotel Singapore",
                            },
                            {
                                value: "BayHotelHoChiMinh",
                                label: "Bay Hotel Ho Chi Minh",
                            },
                            {
                                value: "BayResortHoiAn",
                                label: "Bay Resort Hoi An",
                            },
                            {
                                value: "BayCapitalDanang",
                                label: "Bay Capital Danang",
                            },
                        ]}
                    />
                </div>

                <div className="flex flex-col">
                    <Text
                        style={{
                            color: "white",
                            marginBottom: "4px",
                        }}
                    >
                        Night
                    </Text>
                    <Input
                        placeholder="Night"
                        type="number"
                        style={{
                            padding: "5px 10px",
                        }}
                    />
                </div>

                <div className=" col-span-2 flex flex-col gap-1">
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        <Text
                            style={{
                                color: "white",
                            }}
                        >
                            Check In
                        </Text>
                        <Text
                            style={{
                                color: "white",
                            }}
                        >
                            Check In
                        </Text>
                    </div>
                    <div className="flex col-span-2">
                        <RangePicker
                            style={{ width: "100%" }}
                            showTime={{ format: "h:m" }}
                            format="DD-MM-YYYY h:m"
                        />
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-4 ">
                    <div className="flex flex-col ">
                        <Text
                            style={{
                                color: "white",
                                marginBottom: "4px",
                            }}
                        >
                            Adult
                        </Text>

                        <Select
                            defaultValue="1"
                            style={{ width: "100%" }}
                            options={[
                                {
                                    value: "1",
                                    label: "1",
                                },
                                {
                                    value: "2",
                                    label: "2",
                                },
                                {
                                    value: "3",
                                    label: "3",
                                },
                                {
                                    value: "4",
                                    label: "4",
                                },
                            ]}
                        />
                    </div>

                    <div className="flex flex-col ">
                        <Text
                            style={{
                                color: "white",
                                marginBottom: "4px",
                            }}
                        >
                            Child
                        </Text>

                        <Select
                            defaultValue="0"
                            style={{ width: "100%" }}
                            options={[
                                {
                                    value: "0",
                                    label: "0",
                                },
                                {
                                    value: "1",
                                    label: "1",
                                },
                                {
                                    value: "2",
                                    label: "2",
                                },
                                {
                                    value: "3",
                                    label: "3",
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className="bookbtn grid col-span-2">
                    <Button type="primary" danger>
                        BOOK NOW
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
