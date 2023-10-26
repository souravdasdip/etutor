"use client";

import { AddDispatch } from "@/redux";
import { cartActions } from "@/redux/features/cart";
import { CourseProps } from "@/types";
import {
  AlignRightOutlined,
  CheckOutlined,
  HeartOutlined,
  HourglassOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import CustomButton from "./CustomButton";

const AddToCart = ({
  title,
  price,
  rating,
  cat,
  image,
  enrolled,
}: CourseProps) => {
  const dispatch = useDispatch<AddDispatch>();

  const handleAddToCart = () => {
    dispatch(
      cartActions.addToCart({
        title,
        price,
        rating,
        cat,
        image,
        enrolled,
      })
    );
  };
  return (
    <div
      style={{
        width: "30vw",
        height: "90vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          display: "flex",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              paddingLeft: 6,
              paddingRight: 6,
              paddingTop: 4,
              paddingBottom: 4,
              background: "#EBEBFF",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#342F98",
                fontSize: 10,

                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              {cat}
            </div>
          </div>
          <div
            style={{
              width: 384,
              color: "#1D2026",
              fontSize: 18,

              fontWeight: "500",
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            width: "30vw",
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
              display: "flex",
            }}
          >
            <img
              style={{ width: 48, height: 48, borderRadius: 9999 }}
              src="https://via.placeholder.com/48x48"
            />
            <div
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  color: "#8C94A3",
                  fontSize: 14,

                  fontWeight: "400",
                }}
              >
                Course by
              </div>
              <div
                style={{
                  color: "#1D2026",
                  fontSize: 14,

                  fontWeight: "400",
                }}
              >
                Kevin Gilbert
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 6,
              display: "flex",
            }}
          >
            <StarOutlined style={{ color: "#FD8E1F" }} />
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 2,
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "#1D2026",
                  fontSize: 16,

                  fontWeight: "500",
                }}
              >
                {rating}
              </div>
              <div
                style={{
                  color: "#6E7485",
                  fontSize: 14,

                  fontWeight: "400",
                }}
              >
                ({enrolled})
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "30vw",
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            display: "flex",
          }}
        >
          <UserOutlined style={{ color: "#564FFD" }} />
          <div>
            <span
              style={{
                color: "#4E5566",
                fontSize: 14,

                fontWeight: "600",
              }}
            >
              {enrolled}
            </span>
            <span
              style={{
                color: "#4E5566",
                fontSize: 14,

                fontWeight: "400",
              }}
            >
              {" "}
              students
            </span>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            display: "flex",
          }}
        >
          <AlignRightOutlined style={{ color: "#E34444" }} />
          <div
            style={{
              color: "#4E5566",
              fontSize: 14,

              fontWeight: "400",
            }}
          >
            Beginner
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            display: "flex",
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <HourglassOutlined style={{ color: "#23BD33" }} />
          </div>
          <div
            style={{
              color: "#4E5566",
              fontSize: 14,

              fontWeight: "400",
            }}
          >
            6 hour
          </div>
        </div>
      </div>
      <div
        style={{
          width: 384,
          justifyContent: "space-between",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "flex",
          }}
        >
          <div
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 4,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#1D2026",
                fontSize: 24,

                fontWeight: "400",
              }}
            >
              {price}$
            </div>
          </div>
        </div>
        <div
          style={{
            padding: 12,
            background: "#FFEEE8",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 16,
            display: "flex",
          }}
        >
          <HeartOutlined style={{ color: "#FF6636" }} />
        </div>
      </div>
      <div
        style={{ width: "30vw", height: 0, border: "1px #E9EAF0 solid" }}
      ></div>
      <div
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 8,
          display: "flex",
        }}
      >
        <div
          style={{
            width: 384,
            color: "#1D2026",
            fontSize: 12,
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          What you’ll learn
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <CheckOutlined style={{ color: "#23BD33" }} />
          <div
            style={{
              width: 352,
              color: "#6E7485",
              fontSize: 14,

              fontWeight: "400",
            }}
          >
            Learn to use Python professionally, learning both Python 2 and
            Python 3!
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <CheckOutlined style={{ color: "#23BD33" }} />
          <div
            style={{
              width: 352,
              color: "#6E7485",
              fontSize: 14,

              fontWeight: "400",
            }}
          >
            Create games with Python, like Tic Tac Toe and Blackjack!
          </div>
        </div>
        <div
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <CheckOutlined style={{ color: "#23BD33" }} />
          <div
            style={{
              width: 352,
              color: "#6E7485",
              fontSize: 14,

              fontWeight: "400",
            }}
          >
            Create games with Python, like Tic Tac Toe and Blackjack!
          </div>
        </div>
      </div>
      <div
        style={{ width: "30vw", height: 0, border: "1px #E9EAF0 solid" }}
      ></div>
      <div
        style={{
          width: "98%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 12,
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#FF6636",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            display: "flex",
          }}
        >
          <ShoppingCartOutlined style={{ color: "white" }} />
          <CustomButton
            style={{
              color: "white",
              fontSize: 16,

              fontWeight: "600",
              textTransform: "capitalize",
            }}
            title="Add to Cart"
            type="primary"
            onClick={handleAddToCart}
          />
        </div>
        <div
          style={{
            width: "100%",
            background: "#FFEEE8",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            display: "inline-flex",
          }}
        >
          <CustomButton
            style={{
              color: "#FF6636",
              fontSize: 16,
              background: "#FFEEE8",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
            title="Course Detail"
            type="link"
          />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
