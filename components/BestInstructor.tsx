import { Button } from "antd";

const BestInstructor = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#F5F7FA" }}>
      <div
        style={{
          display: "flex",
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px auto",
          flexWrap: "wrap",
          padding: "4rem 0",
        }}
      >
        <div
          style={{
            flex: 1,
            height: 271,
            padding: 40,
            background: "#FF6636",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 24,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 12,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: 32,

                fontWeight: "600",
              }}
            >
              Become an instructor
            </div>
            <div
              style={{
                width: 311,
                color: "white",
                fontSize: 14,

                fontWeight: "400",
              }}
            >
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </div>
          </div>

          <Button
            style={{
              color: "#FF6636",
              fontSize: 16,

              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            Start teaching
          </Button>
        </div>

        <div
          style={{
            flex: 1,
            height: 271,
            padding: 40,
            background: "white",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 27,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "#1D2026",
              fontSize: 32,

              fontWeight: "600",
            }}
          >
            Your teaching & earning steps
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 20,
              display: "flex",
            }}
          >
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 20,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    paddingTop: 11,
                    paddingBottom: 11,
                    background: "#EBEBFF",
                    borderRadius: 100,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      textAlign: "center",
                      color: "#564FFD",
                      fontSize: 24,

                      fontWeight: "600",
                    }}
                  >
                    1
                  </div>
                </div>
                <div
                  style={{
                    width: 206,
                    color: "#1D2026",
                    fontSize: 16,

                    fontWeight: "400",
                  }}
                >
                  Apply to become instructor
                </div>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    paddingTop: 11,
                    paddingBottom: 11,
                    background: "#FFF0F0",
                    borderRadius: 100,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      textAlign: "center",
                      color: "#FF6636",
                      fontSize: 24,

                      fontWeight: "600",
                    }}
                  >
                    2
                  </div>
                </div>
                <div
                  style={{
                    width: 206,
                    color: "#1D2026",
                    fontSize: 16,

                    fontWeight: "400",
                  }}
                >
                  Build & edit your profile
                </div>
              </div>
            </div>
            <div
              style={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 20,
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    paddingTop: 11,
                    paddingBottom: 11,
                    background: "#FFF0F0",
                    borderRadius: 100,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      textAlign: "center",
                      color: "#E34444",
                      fontSize: 24,

                      fontWeight: "600",
                    }}
                  >
                    3
                  </div>
                </div>
                <div
                  style={{
                    width: 206,
                    color: "#1D2026",
                    fontSize: 16,

                    fontWeight: "400",
                  }}
                >
                  Create your new course
                </div>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 16,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    paddingTop: 11,
                    paddingBottom: 11,
                    background: "#E1F7E3",
                    borderRadius: 100,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      textAlign: "center",
                      color: "#23BD33",
                      fontSize: 24,

                      fontWeight: "600",
                    }}
                  >
                    4
                  </div>
                </div>
                <div
                  style={{
                    width: 206,
                    color: "#1D2026",
                    fontSize: 16,

                    fontWeight: "400",
                  }}
                >
                  Start teaching & earning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestInstructor;
