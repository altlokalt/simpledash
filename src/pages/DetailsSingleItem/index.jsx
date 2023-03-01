import React from "react";

import {
  Img,
  Text,
  Input,
  Button,
  CheckBox,
  List,
  Line,
  PagerIndicator,
} from "components";
import { CloseSVG } from "../../assets/images";

const DetailsSingleItemPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_901 flex font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-gray_909 border-b-[1px] border-gray_910 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <div className="header-row my-[4px]">
                <div className="flex flex-row items-center justify-center sm:pr-[20px] pr-[27px]">
                  <Img
                    src="images/img_grid.svg"
                    className="h-[32px] rounded-[50%] w-[32px]"
                    alt="grid"
                  />
                  <Img
                    src="images/img_file.svg"
                    className="h-[19px] ml-[5px] w-[auto]"
                    alt="file"
                  />
                </div>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-row sm:hidden items-start justify-start md:ml-[0] ml-[55px] w-[auto]">
                <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Marketplace
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown_white_a700.svg"
                    className="h-[20px] w-[20px]"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body5"
                    >
                      Resources
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown_white_a700.svg"
                    className="h-[20px] w-[20px]"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <div className="flex sm:flex-1 sm:hidden items-start justify-start md:ml-[0] ml-[222px] sm:w-[100%] w-[356px]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_601 text-gray_601 text-left w-[100%]"
                  wrapClassName="bg-gray_910 flex gap-[8px] px-[16px] py-[8px] w-[100%]"
                  name="InputNoLabel"
                  placeholder="Collection, item or User"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#7c876e"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
              <div className="flex flex-row gap-[16px] sm:hidden items-start justify-start md:ml-[0] ml-[21px] w-[auto]">
                <ul className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-start justify-start w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                    <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                      <Img
                        src="images/img_minimize_red_a700.svg"
                        className=""
                        alt="minimize"
                      />
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                    <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                      <Img
                        src="images/img_bellnotification.svg"
                        className=""
                        alt="bellnotification"
                      />
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] text-center">
                    <Button
                      className="bg-gray_910 flex items-center justify-center min-w-[140px] px-[16px] py-[8px] rounded-[20px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          className="mr-[4px] text-center"
                          alt="close"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                        BNB Chain
                      </div>
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] text-center">
                    <Button className="bg-lime_A400 cursor-pointer font-bold px-[16px] py-[8px] rounded-[20px] text-[14px] text-black_901 text-center">
                      Create NFT
                    </Button>
                  </li>
                </ul>
                <Img
                  src="images/img_arrowleft.svg"
                  className="h-[40px] w-[40px]"
                  alt="arrowleft"
                />
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row gap-[40px] items-center justify-start max-w-[1520px] mt-[40px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex h-[560px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[560px]">
                <div className="bg-gray_913 h-[560px] w-[560px]"></div>
              </div>
              <div className="bg-gray_909 flex flex-col gap-[24px] items-start justify-start max-w-[740px] p-[40px] sm:px-[20px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body4"
                    >
                      Price
                    </Text>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        0.75 BUSD
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body5"
                      >
                        $327.54
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <div className="flex items-center justify-start py-[16px] rounded-[12px] w-[auto]">
                      <Text
                        className="font-bold text-left text-lime_A400 w-[auto]"
                        variant="body4"
                      >
                        Make Offer
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body5"
                    >
                      to buy at another price
                    </Text>
                  </div>
                </div>
                <Button className="bg-lime_A400 cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-black_901 text-center w-[100%]">
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[24px] items-start justify-start max-w-[740px] w-[100%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Breathing Space
                </Text>
                <div className="flex sm:flex-col flex-row gap-[140px] sm:gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[168px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[56px] w-[56px]"
                      alt="arrowleft One"
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Collection
                      </Text>
                      <CheckBox
                        className="font-semibold text-[16px] text-left text-white_A700"
                        inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                        label="Abstract"
                        name="Abstract"
                      ></CheckBox>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[56px] w-[56px]"
                      alt="arrowleft Two"
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Owner
                      </Text>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          0xhg34...nGj2
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[740px] not-italic text-gray_601 text-left"
                  variant="body5"
                >
                  Breathing Space joyfully brings the unique blend of DeFi,
                  Collect-to-Earn and Play-to-Earn Abstract is known for to the
                  Neo N3 ecosystem: the most feature-complete blockchain
                  platform for building decentralized applications for the smart
                  economy of tomorrow.
                </Text>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start max-w-[740px] w-[100%]">
                <div className="bg-gray_909 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[4px] md:w-[100%] w-[610px]">
                  <List
                    className="sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[75%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Items
                      </Text>
                    </div>
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-gray_802 text-left w-[auto]"
                        variant="body4"
                      >
                        Offers
                      </Text>
                    </div>
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Bids
                      </Text>
                    </div>
                  </List>
                  <Button className="bg-white_A700 cursor-pointer font-semibold px-[16px] py-[8px] text-[16px] text-center text-gray_910 w-[100%]">
                    Info
                  </Button>
                </div>
                <div className="bg-gray_909 flex flex-col gap-[294px] md:gap-[40px] h-[522px] md:h-[auto] items-start justify-between p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <List
                      className="flex-col gap-[24px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[8px] items-center justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[204px]">
                          <div className="flex items-start justify-center w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body4"
                            >
                              Contract
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            0x85F0...9E2D
                          </Text>
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[8px] items-center justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[204px]">
                          <div className="flex items-start justify-center w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body4"
                            >
                              Token ID
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            1000287613
                          </Text>
                          <Img
                            src="images/img_sharedirect.svg"
                            className="h-[24px] w-[24px]"
                            alt="sharedirect One"
                          />
                        </div>
                      </div>
                    </List>
                    <List
                      className="flex-col gap-[24px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[8px] items-center justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[204px]">
                          <div className="flex items-start justify-center w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body4"
                            >
                              Token Standard
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            ERC-721
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[8px] items-center justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[204px]">
                          <div className="flex items-start justify-center w-[100%]">
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body4"
                            >
                              Blockchain
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            BNB Chain
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                      <div className="flex items-center justify-start w-[204px]">
                        <div className="flex items-start justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body4"
                          >
                            Metadata
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Centralized
                        </Text>
                        <Img
                          src="images/img_sharedirect.svg"
                          className="h-[24px] w-[24px]"
                          alt="sharedirect Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body5"
                    >
                      You can
                    </Text>
                    <div className="flex items-center justify-start py-[16px] rounded-[12px] w-[auto]">
                      <Text
                        className="font-bold text-left text-lime_A400 w-[auto]"
                        variant="body4"
                      >
                        Report any problem
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body5"
                    >
                      you find.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_900 flex md:flex-col flex-row font-lato gap-[139px] md:gap-[40px] items-start justify-start max-w-[1606px] mt-[26px] mx-[auto] pb-[146px] pr-[146px] md:px-[20px] w-[100%]">
            <Img
              src="images/img_group526.svg"
              className="h-[48px] md:mt-[0] mt-[162px] w-[auto]"
              alt="Group526"
            />
            <div className="h-[1004px] md:h-[1052px] mb-[48px] relative md:w-[100%] w-[91%]">
              <div className="h-[1004px] m-[auto] w-[100%]">
                <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[25px] items-center justify-start md:mt-[0] mt-[149px] md:w-[100%] w-[64%]">
                      <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                        <div className="bg-gradient  flex md:flex-1 items-center justify-start p-[10px] rounded-[20px] md:w-[100%] w-[70%]">
                          <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[99%]">
                            <div className="bg-indigo_A700 flex flex-col md:gap-[40px] gap-[89px] items-center justify-end pt-[104px] rounded-[20px] sm:w-[100%] w-[40%]">
                              <Img
                                src="images/img_volume.svg"
                                className="h-[32px] w-[32px]"
                                alt="volume"
                              />
                              <div className="bg-white_A700_3f flex items-start justify-start p-[10px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                                <div className="flex items-center justify-start md:w-[100%] w-[81%]">
                                  <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                                    <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                                      <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                                        <Img
                                          src="images/img_volume.svg"
                                          className="h-[32px]"
                                          alt="volume One"
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
                              alt="volume Two"
                            />
                            <div className="bg-white_A700_3f flex items-start justify-start p-[10px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                              <div className="flex items-center justify-start md:w-[100%] w-[76%]">
                                <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                                  <div className="bg-gray_801 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                                    <Button className="bg-indigo_A700 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                                      <Img
                                        src="images/img_volume.svg"
                                        className="h-[32px]"
                                        alt="volume Three"
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
                        className="flex h-[10px] justify-center w-[50px]"
                        count={3}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-indigo_A700 w-[10px]"
                        activeIndex={1}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_33 w-[8px]"
                        selectedWrapperCss="inline-block md:ml-[0] mx-[6.00px] sm:ml-[0]"
                        unselectedWrapperCss="inline-block md:ml-[0] mx-[6.00px] sm:ml-[0]"
                      />
                      <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
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
                                alt="menu"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="bg-gradient  flex flex-1 flex-col gap-[10px] items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                          <div className="bg-indigo_A700 flex flex-col items-start justify-start p-[10px] rounded-[20px] w-[100%]">
                            <Text
                              className="bg-white_A700_3f font-bold h-[50px] pb-[14px] pl-[23px] pr-[35px] pt-[18px] sm:px-[20px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[95px]"
                              variant="body5"
                            >
                              {" "}
                              Sport
                            </Text>
                            <Img
                              src="images/img_volume.svg"
                              className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                              alt="volume Four"
                            />
                            <div className="flex flex-row items-start justify-start mb-[2px] mt-[48px] md:w-[100%] w-[58%]">
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
                          <div className="bg-indigo_A700 flex flex-col items-start justify-start p-[10px] rounded-[20px] w-[100%]">
                            <Text
                              className="bg-white_A700_3f font-bold h-[50px] pl-[20px] sm:pr-[20px] pr-[32px] py-[16px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[75px]"
                              variant="body5"
                            >
                              {" "}
                              Art
                            </Text>
                            <Img
                              src="images/img_volume.svg"
                              className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                              alt="volume Five"
                            />
                            <div className="flex flex-row items-start justify-start mb-[2px] mt-[48px] md:w-[100%] w-[58%]">
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
                          <div className="bg-indigo_A700 flex items-center justify-start p-[78px] sm:px-[20px] md:px-[40px] rounded-[20px] w-[100%]">
                            <Img
                              src="images/img_volume.svg"
                              className="h-[32px] mb-[2px] w-[32px]"
                              alt="volume Six"
                            />
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
                    <div className="bg-gray_900 flex md:flex-1 items-start justify-end outline outline-[1px] outline-gray_800 p-[31px] sm:px-[20px] md:w-[100%] w-[33%]">
                      <div className="flex flex-col gap-[58px] justify-start md:ml-[0] ml-[9px] mt-[28px] md:w-[100%] w-[90%]">
                        <Img
                          src="images/img_volume.svg"
                          className="h-[32px] md:ml-[0] ml-[165px] w-[32px]"
                          alt="volume Seven"
                        />
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="bg-gradient  flex flex-row gap-[25px] items-center justify-between p-[10px] rounded-[20px] w-[100%]">
                            <div className="bg-indigo_A700 flex flex-col md:gap-[40px] gap-[84px] items-center justify-start p-[10px] rounded-[20px] w-[auto]">
                              <Text
                                className="bg-white_A700_3f font-bold h-[50px] pl-[19px] sm:pr-[20px] pr-[35px] py-[16px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[79px]"
                                variant="body5"
                              >
                                Art
                              </Text>
                              <Img
                                src="images/img_volume.svg"
                                className="h-[32px] mb-[119px] w-[32px]"
                                alt="volume Eight"
                              />
                            </div>
                            <Img
                              src="images/img_group476.svg"
                              className="h-[190px] mr-[14px] w-[auto]"
                              alt="Group476"
                            />
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
                                      alt="volume Nine"
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
                                      alt="volume Ten"
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
                            Blue and Pink Abstract is one of the abstract
                            objects created by Charles Will and owned by Lionel
                            Lee. This abstract belongs to the art category, and
                            this abstract was published on August 12, 2020.
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
                <div className="absolute bottom-[24%] flex flex-row items-center justify-between left-[15%] w-[31%]">
                  <div className="flex flex-col md:gap-[40px] gap-[70px] justify-start w-[20%]">
                    <div className="bg-white_A700_3f h-[50px] mr-[30px] rounded-[20px] w-[50px]"></div>
                    <Img
                      src="images/img_star_white_a700.svg"
                      className="h-[28px] md:ml-[0] ml-[53px] w-[auto]"
                      alt="star"
                    />
                  </div>
                  <div className="flex flex-col md:gap-[40px] gap-[70px] justify-start w-[29%]">
                    <div className="bg-white_A700_3f h-[50px] mr-[63px] rounded-[20px] w-[50px]"></div>
                    <Img
                      src="images/img_star_orange_200.svg"
                      className="h-[28px] md:ml-[0] ml-[86px] w-[auto]"
                      alt="star One"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[22%] flex flex-row gap-[46px] items-start justify-center right-[30%] w-[25%]">
                <div className="flex flex-col md:gap-[40px] gap-[98px] items-start justify-start w-[41%]">
                  <Text
                    className="bg-white_A700_3f font-bold h-[50px] pb-[14px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[18px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[109px]"
                    variant="body5"
                  >
                    Gaming
                  </Text>
                  <div className="flex flex-row items-start justify-evenly w-[100%]">
                    <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                      01h
                    </Button>
                    <Text
                      className="mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body7"
                    >
                      :
                    </Text>
                    <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                      15m
                    </Button>
                    <Text
                      className="mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                      variant="body7"
                    >
                      :
                    </Text>
                    <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                      09s
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col md:gap-[40px] gap-[70px] justify-start w-[46%]">
                  <div className="bg-white_A700_3f h-[50px] mr-[96px] rounded-[20px] w-[50px]"></div>
                  <Img
                    src="images/img_star_white_a700.svg"
                    className="h-[28px] md:ml-[0] ml-[119px] w-[auto]"
                    alt="star Two"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[24px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from Abstract
            </Text>
            <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start w-[100%]">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[75%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_909 flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-gray_601 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Abstract"
                            name="PolychainMonsters"
                          ></CheckBox>
                          <Img
                            src="images/img_close.svg"
                            className="h-[24px] w-[24px]"
                            alt="close"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Giraffe
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body5"
                            >
                              6
                            </Text>
                            <Img
                              src="images/img_grid_gray_601.svg"
                              className="h-[16px] w-[16px]"
                              alt="grid One"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_913 h-[1px] w-[100%]" />
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.5 BUSD
                            </Text>
                            <Img
                              src="images/img_lightbulb.svg"
                              className="h-[24px] w-[24px]"
                              alt="lightbulb"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Ends in
                          </Text>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              01 : 29 : 35
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_909 flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-gray_601 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Abstract"
                            name="PolychainMonsters One"
                          ></CheckBox>
                          <Img
                            src="images/img_close.svg"
                            className="h-[24px] w-[24px]"
                            alt="close One"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Puppangy
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body5"
                            >
                              6
                            </Text>
                            <Img
                              src="images/img_grid_gray_601.svg"
                              className="h-[16px] w-[16px]"
                              alt="grid Two"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_913 h-[1px] w-[100%]" />
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.07 BUSD
                            </Text>
                            <Img
                              src="images/img_lightbulb.svg"
                              className="h-[24px] w-[24px]"
                              alt="lightbulb One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Ends in
                          </Text>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              01 : 29 : 35
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_909 flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-gray_601 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Abstract"
                            name="PolychainMonsters Two"
                          ></CheckBox>
                          <Img
                            src="images/img_close.svg"
                            className="h-[24px] w-[24px]"
                            alt="close Two"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Platiphac
                          </Text>
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body5"
                            >
                              6
                            </Text>
                            <Img
                              src="images/img_grid_gray_601.svg"
                              className="h-[16px] w-[16px]"
                              alt="grid Three"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-gray_913 h-[1px] w-[100%]" />
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Current bid
                          </Text>
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.83 BUSD
                            </Text>
                            <Img
                              src="images/img_lightbulb.svg"
                              className="h-[24px] w-[24px]"
                              alt="lightbulb Two"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            Ends in
                          </Text>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              01 : 29 : 35
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-gray_601 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Abstract"
                          name="PolychainMonsters Three"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Three"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Neo Unigiraffe
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.15 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                View More
              </Button>
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from the seller
            </Text>
            <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <List
                className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Four"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Wheel
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Five"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Green car
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Six"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Car-Free City
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_909 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_913 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body5"
                          >
                            Doodle Apes{" "}
                          </Text>
                        </div>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Seven"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Gold car
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray_913 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.75 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                View More
              </Button>
            </div>
          </div>
          <div className="bg-gray_909 flex flex-col font-montserrat gap-[40px] items-center justify-center max-w-[1680px] mt-[180px] py-[180px] w-[100%]">
            <Text
              className="text-center text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Get the latest ALTLOKAL updates
            </Text>
            <div className="flex items-start justify-start md:px-[20px] sm:w-[100%] w-[530px]">
              <div className="bg-gray_910 flex flex-row gap-[8px] items-start justify-start px-[16px] py-[20px] w-[100%]">
                <Text
                  className="flex-1 font-normal not-italic text-gray_601 text-left w-[auto]"
                  variant="body5"
                >
                  Your Email
                </Text>
                <Img
                  src="images/img_arrowright_white_a700_24x24.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <footer className="bg-black_901 flex font-montserrat items-center justify-center md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[41px] mt-[180px] mx-[auto] w-[91%]">
              <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[17%]">
                    <div className="flex flex-row gap-[9px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[49px] w-[100%]">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[58px] rounded-[50%] w-[58px]"
                        alt="grid Four"
                      />
                      <Img
                        src="images/img_labs.svg"
                        className="h-[35px] w-[auto]"
                        alt="LABS"
                      />
                    </div>
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                      <Text
                        className="font-semibold text-center text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Join LABS community
                      </Text>
                      <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                        <Img
                          src="images/img_icontwitter.svg"
                          className="h-[40px] w-[40px]"
                          alt="icontwitter"
                        />
                        <Img
                          src="images/img_send_white_a700.svg"
                          className="h-[40px] w-[40px]"
                          alt="send"
                        />
                        <Img
                          src="images/img_rewind.svg"
                          className="h-[40px] w-[40px]"
                          alt="rewind"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[275px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Marketplace
                    </Text>
                    <ul className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-gray_601 text-left"
                          variant="body3"
                        >
                          Home
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_601 text-left"
                          href="javascript:"
                        >
                          Explore
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-gray_601 text-left"
                          href="javascript:"
                        >
                          Activities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[259px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Resources
                    </Text>
                    <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        Help Center
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        FAQ
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[281px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Links
                    </Text>
                    <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body3"
                      >
                        Terms of Service
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray_802 h-[1px] mt-[160px] w-[100%]" />
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[27px] not-italic text-gray_601 text-left w-[auto]"
                  variant="body3"
                >
                  © LABS, Inc. All rights reserved.
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DetailsSingleItemPage;
