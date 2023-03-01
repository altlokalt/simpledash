import React from "react";

import {
  Button,
  Img,
  Input,
  Text,
  Line,
  PagerIndicator,
  List,
} from "components";
import { CloseSVG } from "../../assets/images";

const DashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_900 flex font-lato items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <div className="h-[1024px] md:px-[20px] relative w-[8%]">
            <aside className="flex flex-col md:hidden justify-start m-[auto] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="bg-gray_900 flex flex-col md:gap-[40px] gap-[805px] md:hidden items-center justify-start outline outline-[2px] outline-gray_800 p-[22px] sm:px-[20px] w-[100%]">
                  <Button className="bg-indigo_A700 flex h-[60px] items-center justify-center mt-[38px] p-[13px] w-[60px]">
                    <Img
                      src="images/img_volume.svg"
                      className="h-[32px]"
                      alt="volume"
                    />
                  </Button>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-[24px] mb-[53px] w-[24px]"
                    alt="arrowright"
                  />
                </div>
              </div>
            </aside>
            <div className="absolute flex flex-row gap-[35px] md:hidden items-start justify-between left-[0] top-[16%] w-[62%]">
              <Img
                src="images/img_rectangle171.png"
                className="h-[48px] md:h-[auto] object-cover rounded-[2px] w-[auto]"
                alt="Rectangle171"
              />
              <div className="flex flex-col md:gap-[40px] gap-[75px] items-center justify-start mt-[12px] w-[auto]">
                <Img
                  src="images/img_home.svg"
                  className="h-[24px] w-[24px]"
                  alt="home"
                />
                <Img
                  src="images/img_star.svg"
                  className="h-[24px] w-[24px]"
                  alt="star"
                />
                <Img
                  src="images/img_menu.svg"
                  className="h-[24px] w-[24px]"
                  alt="menu"
                />
                <Img
                  src="images/img_bag.svg"
                  className="h-[24px] w-[24px]"
                  alt="bag"
                />
                <Img
                  src="images/img_settings.svg"
                  className="h-[24px] w-[24px]"
                  alt="settings"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-start md:px-[20px] w-[59%]">
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] text-left placeholder:text-white_A700_3f text-white_A700_3f tracking-[0.50px] w-[100%]"
                wrapClassName="bg-gray_901 flex px-[25px] py-[16px] rounded-[20px] sm:px-[20px] sm:w-[100%] w-[auto]"
                name="Group447"
                placeholder="Search collections ..."
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer ml-[35px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#3fffffff"
                    />
                  ) : (
                    <Img
                      src="images/img_search_white_a700.svg"
                      className="cursor-pointer ml-[35px] my-[auto]"
                      alt="search"
                    />
                  )
                }
              ></Input>
              <Button
                className="bg-gray_901 flex items-center justify-center px-[25px] py-[16px] rounded-[20px] sm:px-[20px] text-center"
                leftIcon={
                  <Img
                    src="images/img_car.svg"
                    className="mr-[15px] text-center"
                    alt="car"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[14px] text-left text-white_A700 tracking-[0.50px]">
                  99.760 ETH
                </div>
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between mt-[50px] w-[100%]">
              <div className="bg-gradient  flex md:flex-1 items-center justify-start p-[10px] rounded-[20px] md:w-[100%] w-[70%]">
                <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[99%]">
                  <div className="bg-indigo_A700 flex flex-col md:gap-[40px] gap-[89px] items-center justify-end pt-[104px] rounded-[20px] sm:w-[100%] w-[40%]">
                    <Img
                      src="images/img_volume.svg"
                      className="h-[32px] w-[32px]"
                      alt="volume One"
                    />
                    <div className="bg-white_A700_3f flex items-start justify-start p-[10px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[81%]">
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                          <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                            <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                              <Img
                                src="images/img_volume.svg"
                                className="h-[32px]"
                                alt="volume Two"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                              variant="body6"
                            >
                              Creator
                            </Text>
                            <Text
                              className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body5"
                            >
                              Alexander Lux
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:w-[100%] w-[57%]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Blue and Coral Abstract
                    </Text>
                    <div className="bg-bluegray_900_bf flex items-center justify-start mt-[19px] p-[14px] rounded-[20px] w-[100%]">
                      <div className="flex flex-row items-start justify-between mb-[3px] md:w-[100%] w-[97%]">
                        <div className="flex flex-col items-start justify-start mt-[5px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                            variant="body6"
                          >
                            Current Bid
                          </Text>
                          <Text
                            className="font-bold mt-[11px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                            variant="body3"
                          >
                            1.69 ETH
                          </Text>
                          <Text
                            className="font-normal mt-[11px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                            variant="body5"
                          >
                            $3900,67
                          </Text>
                        </div>
                        <Line className="bg-white_A700_19 h-[82px] w-[1px]" />
                        <div className="flex items-center justify-start mt-[6px] w-[auto]">
                          <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                              variant="body6"
                            >
                              Auction Ending In
                            </Text>
                            <div className="flex flex-row gap-[14px] items-start justify-between w-[100%]">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold h-[22px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                                  variant="body3"
                                >
                                  00
                                </Text>
                                <Text
                                  className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                  variant="body5"
                                >
                                  Hrs
                                </Text>
                              </div>
                              <Text
                                className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                :
                              </Text>
                              <div className="flex flex-col gap-[10px] items-center justify-start w-[auto]">
                                <Text
                                  className="font-bold h-[22px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                                  variant="body3"
                                >
                                  56
                                </Text>
                                <Text
                                  className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                  variant="body5"
                                >
                                  Mins
                                </Text>
                              </div>
                              <Text
                                className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                :
                              </Text>
                              <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                                <Text
                                  className="font-bold h-[22px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                                  variant="body3"
                                >
                                  08
                                </Text>
                                <Text
                                  className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                  variant="body5"
                                >
                                  Secs
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                      <Button className="border-[1px] border-solid border-white_A700 cursor-pointer font-bold leading-[normal] min-w-[147px] py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        View Artwork
                      </Button>
                      <Button className="bg-indigo_A700 cursor-pointer font-bold leading-[normal] min-w-[147px] py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        Place a Bid
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  flex md:flex-1 items-center justify-start p-[10px] rounded-[20px] md:w-[100%] w-[29%]">
                <div className="bg-indigo_A700 flex flex-col md:gap-[40px] gap-[89px] items-center justify-end pt-[104px] rounded-[20px] w-[100%]">
                  <Img
                    src="images/img_volume.svg"
                    className="h-[32px] w-[32px]"
                    alt="volume Three"
                  />
                  <div className="bg-white_A700_3f flex items-start justify-start p-[10px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[76%]">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                        <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                          <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                            <Img
                              src="images/img_volume.svg"
                              className="h-[32px]"
                              alt="volume Four"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                            variant="body6"
                          >
                            Creator
                          </Text>
                          <Text
                            className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                            variant="body5"
                          >
                            Robert Khan
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PagerIndicator
              className="flex h-[10px] justify-center mt-[25px] w-[50px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-indigo_A700 w-[10px]"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_33 w-[8px]"
              selectedWrapperCss="inline-block md:ml-[0] mx-[6.00px] sm:ml-[0]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[6.00px] sm:ml-[0]"
            />
            <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[25px] w-[100%]">
              <Text
                className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Hot Bids
              </Text>
              <div className="flex flex-row gap-[25px] items-center justify-between w-[27%]">
                <div className="bg-gray_901 flex h-[50px] items-center justify-start p-[13px] rounded-[20px] w-[50px]">
                  <div className="flex h-[24px] items-center justify-start w-[24px]">
                    <Img
                      src="images/img_eye.svg"
                      className="h-[24px] w-[24px]"
                      alt="eye"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[34%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                    variant="body5"
                  >
                    01/25
                  </Text>
                  <div className="h-[5px] mt-[4px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-indigo_A700 rounded-[2px]"></div>
                    <div
                      className="h-full absolute bg-indigo_A700  rounded-[2px]"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gray_901 flex h-[50px] items-center justify-start p-[13px] rounded-[20px] w-[50px]">
                  <div className="flex h-[24px] items-center justify-start w-[24px]">
                    <Img
                      src="images/img_menu_white_a700.svg"
                      className="h-[24px] w-[24px]"
                      alt="menu One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <List
              className="flex flex-row gap-[20px] grid-cols-3 justify-center mt-[25px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gradient  flex flex-1 flex-col gap-[10px] items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                <div className="bg-indigo_A700 flex items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col items-start justify-start mb-[2px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="bg-white_A700_3f font-bold h-[50px] pb-[14px] pl-[23px] pr-[35px] pt-[18px] sm:px-[20px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[95px]"
                        variant="body5"
                      >
                        {" "}
                        Sport
                      </Text>
                      <Button className="bg-white_A700_3f flex h-[50px] items-center justify-center p-[13px] rounded-[20px] w-[50px]">
                        <Img
                          src="images/img_star_white_a700.svg"
                          className="h-[24px]"
                          alt="star One"
                        />
                      </Button>
                    </div>
                    <Img
                      src="images/img_volume.svg"
                      className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                      alt="volume Five"
                    />
                    <div className="flex flex-row items-start justify-start mt-[48px] md:w-[100%] w-[58%]">
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        02h
                      </Button>
                      <Text
                        className="ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                        variant="body7"
                      >
                        :
                      </Text>
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        25m
                      </Button>
                      <Text
                        className="ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                        variant="body7"
                      >
                        :
                      </Text>
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        04s
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-[9px] md:w-[100%] w-[92%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                    variant="body3"
                  >
                    Blue and White Abstract
                  </Text>
                  <div className="flex items-center justify-start mt-[9px] md:w-[100%] w-[63%]">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                      <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                        <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[32px]"
                            alt="volume One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                          variant="body6"
                        >
                          Creator
                        </Text>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          Josh Huang
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[15px] w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                        variant="body6"
                      >
                        Current Bid
                      </Text>
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="font-bold text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          1.25 ETH
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          $2913.41
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  flex flex-1 flex-col gap-[11px] items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                <div className="bg-indigo_A700 flex items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col items-start justify-start mb-[2px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="bg-white_A700_3f font-bold h-[50px] pl-[20px] sm:pr-[20px] pr-[32px] py-[16px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[75px]"
                        variant="body5"
                      >
                        {" "}
                        Art
                      </Text>
                      <Button className="bg-white_A700_3f flex h-[50px] items-center justify-center p-[13px] rounded-[20px] w-[50px]">
                        <Img
                          src="images/img_star_orange_200.svg"
                          className="h-[24px]"
                          alt="star Two"
                        />
                      </Button>
                    </div>
                    <Img
                      src="images/img_volume.svg"
                      className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                      alt="volume Six"
                    />
                    <div className="flex flex-row items-start justify-start mt-[48px] md:w-[100%] w-[58%]">
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        03h
                      </Button>
                      <Text
                        className="ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                        variant="body7"
                      >
                        :
                      </Text>
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        24m
                      </Button>
                      <Text
                        className="ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                        variant="body7"
                      >
                        :
                      </Text>
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        03s
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-[9px] md:w-[100%] w-[92%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                    variant="body3"
                  >
                    Blue and Orange Abstract
                  </Text>
                  <div className="flex items-center justify-start mt-[8px] md:w-[100%] w-[65%]">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                      <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                        <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[32px]"
                            alt="volume One One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                          variant="body6"
                        >
                          Creator
                        </Text>
                        <Text
                          className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          Charles Will
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[15px] w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                        variant="body6"
                      >
                        Current Bid
                      </Text>
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="font-bold text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          2.49 ETH
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          $5803.52
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  flex flex-1 flex-col gap-[10px] items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                <div className="bg-indigo_A700 flex items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                  <div className="flex flex-col items-start justify-start mb-[2px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="bg-white_A700_3f font-bold h-[50px] pb-[14px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[18px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[109px]"
                        variant="body5"
                      >
                        Gaming
                      </Text>
                      <Button className="bg-white_A700_3f flex h-[50px] items-center justify-center p-[13px] rounded-[20px] w-[50px]">
                        <Img
                          src="images/img_star_white_a700.svg"
                          className="h-[24px]"
                          alt="star Three"
                        />
                      </Button>
                    </div>
                    <Img
                      src="images/img_volume.svg"
                      className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                      alt="volume Seven"
                    />
                    <div className="flex flex-row items-start justify-start mt-[48px] md:w-[100%] w-[58%]">
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        01h
                      </Button>
                      <Text
                        className="ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                        variant="body7"
                      >
                        :
                      </Text>
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        15m
                      </Button>
                      <Text
                        className="ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                        variant="body7"
                      >
                        :
                      </Text>
                      <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        09s
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-[9px] md:w-[100%] w-[92%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                    variant="body3"
                  >
                    Blue Water Abstract
                  </Text>
                  <div className="flex items-center justify-start mt-[9px] md:w-[100%] w-[61%]">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                      <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                        <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[32px]"
                            alt="volume One Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                          variant="body6"
                        >
                          Creator
                        </Text>
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          Bright Win
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[15px] w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                        variant="body6"
                      >
                        Current Bid
                      </Text>
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="font-bold text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          0.83 ETH
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          $1934.51
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-gray_900 flex sm:flex-row sm:hidden items-center justify-start outline outline-[1px] outline-gray_800 p-[40px] md:px-[20px] w-[29%]">
            <div className="flex flex-col gap-[50px] items-end justify-start my-[10px] w-[100%]">
              <div className="flex flex-row gap-[40px] items-center justify-end ml-[auto] md:w-[100%] w-[92%]">
                <div className="flex flex-row items-center justify-between w-[29%]">
                  <Img
                    src="images/img_music.svg"
                    className="h-[24px] w-[24px]"
                    alt="music"
                  />
                  <Img
                    src="images/img_notification.svg"
                    className="h-[24px] w-[24px]"
                    alt="notification"
                  />
                </div>
                <div className="flex items-center justify-start w-[59%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="bg-gray_901 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                        <Img
                          src="images/img_volume.svg"
                          className="h-[32px]"
                          alt="volume Eight"
                        />
                      </Button>
                    </div>
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body5"
                    >
                      Gerald Smith
                    </Text>
                    <div className="flex h-[24px] items-center justify-start w-[24px]">
                      <Img
                        src="images/img_forward.svg"
                        className="h-[24px] w-[24px]"
                        alt="forward"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="bg-gradient  flex flex-row gap-[25px] items-center justify-between p-[10px] rounded-[20px] w-[100%]">
                  <div className="bg-indigo_A700 flex flex-col md:gap-[40px] gap-[84px] items-center justify-start p-[10px] rounded-[20px] w-[72%]">
                    <Text
                      className="bg-white_A700_3f font-bold h-[50px] pl-[19px] sm:pr-[20px] pr-[35px] py-[16px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[79px]"
                      variant="body5"
                    >
                      Art
                    </Text>
                    <Img
                      src="images/img_volume.svg"
                      className="h-[32px] mb-[119px] w-[32px]"
                      alt="volume Nine"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-center justify-start mr-[14px] w-[16%]">
                    <Button className="bg-bluegray_900 flex h-[50px] items-center justify-center p-[13px] rounded-[20px] w-[50px]">
                      <Img
                        src="images/img_star_amber_300.svg"
                        className="h-[24px]"
                        alt="star Four"
                      />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[50px] items-center justify-center p-[13px] rounded-[20px] w-[50px]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[24px]"
                        alt="clock"
                      />
                    </Button>
                    <Button className="bg-bluegray_900 flex h-[50px] items-center justify-center p-[13px] rounded-[20px] w-[50px]">
                      <Img
                        src="images/img_dashboard.svg"
                        className="h-[24px]"
                        alt="dashboard"
                      />
                    </Button>
                  </div>
                </div>
                <Text
                  className="font-bold mt-[33px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Blue and Orange Abstract
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[36px] grid grid-cols-2 mt-[26px] w-[96%]"
                  orientation="horizontal"
                >
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                      <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                        <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[32px]"
                            alt="volume Ten"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                          variant="body6"
                        >
                          Creator
                        </Text>
                        <Text
                          className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          Charles Will
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                      <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                        <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                          <Img
                            src="images/img_volume.svg"
                            className="h-[32px]"
                            alt="volume Eleven"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                          variant="body6"
                        >
                          Owner
                        </Text>
                        <Text
                          className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body5"
                        >
                          Leonel Lee
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row items-center justify-between mt-[35px] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                      variant="body6"
                    >
                      Current Bid
                    </Text>
                    <Text
                      className="font-bold mt-[11px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                      variant="body3"
                    >
                      2.49 ETH
                    </Text>
                    <Text
                      className="font-normal mt-[11px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body5"
                    >
                      $5803.52
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[46%]">
                    <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                        variant="body6"
                      >
                        Auction Ending In
                      </Text>
                      <div className="flex flex-row gap-[14px] items-start justify-between w-[100%]">
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold h-[22px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                            variant="body3"
                          >
                            03
                          </Text>
                          <Text
                            className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                            variant="body5"
                          >
                            Hrs
                          </Text>
                        </div>
                        <Text
                          className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          :
                        </Text>
                        <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                          <Text
                            className="font-bold h-[22px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                            variant="body3"
                          >
                            24
                          </Text>
                          <Text
                            className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                            variant="body5"
                          >
                            Mins
                          </Text>
                        </div>
                        <Text
                          className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          :
                        </Text>
                        <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                          <Text
                            className="font-bold h-[22px] text-indigo_A700 text-justify tracking-[0.50px] w-[auto]"
                            variant="body3"
                          >
                            03
                          </Text>
                          <Text
                            className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                            variant="body5"
                          >
                            Secs
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-normal leading-[26.00px] mt-[33px] not-italic text-justify text-white_A700_b2 tracking-[0.50px] w-[100%]"
                  variant="body5"
                >
                  Blue and Pink Abstract is one of the abstract objects created
                  by Charles Will and owned by Lionel Lee. This abstract belongs
                  to the art category, and this abstract was published on August
                  12, 2020.
                </Text>
                <div className="flex flex-row gap-[20px] items-center justify-between mt-[30px] w-[100%]">
                  <Button className="cursor-pointer font-bold leading-[normal] min-w-[157px] outline outline-[1px] outline-white_A700 py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                    View Artwork
                  </Button>
                  <Button className="bg-indigo_A700 cursor-pointer font-bold leading-[normal] min-w-[157px] py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                    Place a Bid
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
