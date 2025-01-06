import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#eaecef",
      }}
    >
      <Box
        sx={{
          width: "1920px",
          height: "1024px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "1088px",
            backgroundImage: "url(/static/img/frame-3.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              gap: "23px",
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "10px",
                opacity: 0.3,
                backdropFilter: "blur(60px) brightness(100%)",
              }}
            />
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "10px",
                opacity: 0.3,
                backdropFilter: "blur(60px) brightness(100%)",
              }}
            />
          </Box>
        </Box>

        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "32px 20px",
            flex: 1,
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginTop: "-1px",
            }}
          >
            Condo AI
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "32px",
              width: "100%",
              maxWidth: "672px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                width: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  marginTop: "-1px",
                }}
              >
                Welcome Back
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#333",
                  whiteSpace: "nowrap",
                }}
              >
                Good to be back. Login to your account
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px",
                width: "100%",
                backgroundColor: "#f0f0f0",
                borderRadius: "16px",
                border: "2px solid #ccc",
                boxShadow: "inset 0px 2px 20px -4px #7c859873",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  backgroundColor: "#e0e0e0",
                  borderRadius: "8px",
                  border: "2px solid #ccc",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  margin: "-2px",
                }}
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                sx={{
                  flex: 1,
                  borderRadius: "8px",
                  margin: "-2px",
                }}
              >
                Sign Up
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "24px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "24px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "16px",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333",
                      marginTop: "-1px",
                    }}
                  >
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon sx={{ marginRight: "8px" }} />
                      ),
                    }}
                  />
                  <Link
                    href="#"
                    sx={{
                      alignSelf: "flex-end",
                      color: "#333",
                      marginTop: "8px",
                    }}
                  >
                    Forgot Email?
                  </Link>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "16px",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333",
                      marginTop: "-1px",
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="password"
                    placeholder="⁕⁕⁕⁕⁕⁕⁕⁕"
                    InputProps={{
                      startAdornment: (
                        <LockOutlinedIcon sx={{ marginRight: "8px" }} />
                      ),
                      endAdornment: (
                        <VisibilityOffOutlinedIcon sx={{ marginLeft: "8px" }} />
                      ),
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          icon={<CheckBoxOutlineBlankOutlinedIcon />}
                          checkedIcon={<CheckBoxOutlineBlankOutlinedIcon />}
                        />
                      }
                      label="Keep me logged in"
                    />
                    <Link
                      href="#"
                      sx={{
                        color: "#333",
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#00c853",
                borderRadius: "8px",
                border: "2px solid #00c853",
                color: "#fff",
                padding: "16px",
                margin: "-2px",
              }}
            >
              Login
            </Button>

            <Typography
              variant="body1"
              sx={{
                color: "#333",
                whiteSpace: "nowrap",
              }}
            >
              Or sign in with
            </Typography>

            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: "8px",
                border: "2px solid #ccc",
                padding: "16px",
                margin: "-2px",
              }}
            >
              Google
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "672px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                marginTop: "-1px",
              }}
            >
              All rights reserved, Condo AI, 2024
            </Typography>
            <Link
              href="#"
              sx={{
                color: "#333",
                marginTop: "-1px",
              }}
            >
              Need help?
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
