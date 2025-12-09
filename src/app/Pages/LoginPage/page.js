"use client";

import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Divider,
    Alert,
    CircularProgress,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginUser, clearError } from "../../../redux/slices/authSlice";
import Logo from "../../../Images/logoblack.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LeftSection = styled(Box)(({ theme }) => ({
    backgroundColor: "#F3DABB",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    padding: "40px",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const LogoBox = styled(Box)({
    position: "absolute",
    top: "20px",
    left: "20px",
});

const RightLogoBox = styled(Box)(({ theme }) => ({
    display: "none",
    backgroundColor: "#F3DABB",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "8px",
    [theme.breakpoints.down("md")]: {
        display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
        height: "80px",
    },
}));

const IllustrationBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
});

const RightSection = styled(Box)(({ theme }) => ({
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
        padding: "20px",
    },
}));

const FormContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "530px",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));

const FormBox = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "450px",
    [theme.breakpoints.down("md")]: {
        maxWidth: "530px",
    },
}));

const Title = styled(Typography)(({ theme }) => ({
    fontSize: "28px",
    fontWeight: 600,
    color: "#191919",
    marginBottom: "8px",
    fontFamily: "var(--font-inter)",
    letterSpacing: "-0.3px",
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
    },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#181818",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "-0.32px",
    marginBottom: "25px",
    fontFamily: "var(--font-inter)",
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
    },
}));

const InputLabel = styled(Typography)({
    fontSize: "14px",
    color: "#191919",
    fontFamily: "var(--font-inter)",
    fontWeight: 600,
    marginBottom: "8px",
    letterSpacing: "-0.14px",
    lineHeight: "20px",
});

const StyledTextField = styled(TextField)(({ theme }) => ({
    maxWidth: "450px",
    marginBottom: "30px",
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#FFFFFF",
        borderRadius: "8px",
        "& fieldset": {
            borderColor: "#EEDEC7",
        },
        "&:hover fieldset": {
            borderColor: "#B8936D",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#B8936D",
        },
    },
    "& .MuiInputBase-input": {
        fontFamily: "var(--font-inter)",
        fontSize: "14px",
        padding: "12px 14px",
    },
    [theme.breakpoints.down("md")]: {
        maxWidth: "530px",
    },
}));

const SignInButton = styled(Button)({
    backgroundColor: "#B38349",
    color: "#FFFFFF",
    padding: "10px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    textTransform: "none",
    fontFamily: "var(--font-inter)",
    width: "100%",
    marginTop: "10px",
    "&:hover": {
        backgroundColor: "#A17F5A",
    },
    "&:disabled": {
        backgroundColor: "#D4C4B0",
        color: "#FFFFFF",
    },
});

const GoogleButton = styled(Button)({
    border: "1px solid #E0E0E0",
    color: "#000000",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 600,
    textTransform: "none",
    fontFamily: "var(--font-inter)",
    width: "100%",
    marginTop: "16px",
    "&:hover": {
        backgroundColor: "#F9F9F9",
    },
});

const RememberCheckbox = styled(FormControlLabel)({
    "& .MuiTypography-root": {
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "-0.28px",
        lineHeight: "20px",
        fontFamily: "var(--font-inter)",
        color: "#181818",
    },
    "& .MuiCheckbox-root": {
        color: "#B38349",
        "&.Mui-checked": {
            color: "#B38349",
        },
    },
});

const ForgotPasswordLink = styled(Typography)({
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.14px",
    color: "#EE5B54",
    cursor: "pointer",
    fontFamily: "var(--font-inter)",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline",
    },
});

const DividerText = styled(Typography)({
    fontSize: "14px",
    color: "#191919",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.28px",
    fontFamily: "var(--font-inter)",
    textAlign: "center",
    margin: "0",
    padding: "0 12px",
});

const DividerLine = styled(Divider)({
    flexGrow: 1,
    color: "#EAEFF4",
    borderBottomWidth: 2,
});

const StyledAlert = styled(Alert)({
    marginBottom: "20px",
    fontFamily: "var(--font-inter)",
    fontSize: "14px",
    borderRadius: "8px",
});

const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isLoading, error, user, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberDevice: false,
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        // Clear any previous errors when component mounts
        dispatch(clearError());
    }, [dispatch]);

    useEffect(() => {
        // Handle redirect after successful login
        if (isAuthenticated && user) {
            if (user.role === "Admin") {
                // Redirect to admin portal
                window.location.href = "https://apsadmin.cloco.com.au/admin";
            } else {
                // Redirect to home page
                router.push("/");
            }
        }
    }, [isAuthenticated, user, router]);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
        
        // Clear error when user starts typing
        if (error) {
            dispatch(clearError());
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.email || !formData.password) {
            return;
        }

        await dispatch(loginUser({ 
            email: formData.email, 
            password: formData.password 
        }));
    };

    const handleGoogleSignIn = () => {
        console.log("Google sign in");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid container>
            {/* Left Section */}
            <Grid size={{ xs: 12, md: 6 }}>
                <LeftSection>
                    <LogoBox>
                        <Image
                            src={Logo}
                            alt="Acting Performance Studio"
                            width={160}
                            height={40}
                        />
                    </LogoBox>
                    <IllustrationBox>
                        <Image
                            src="/loginBg.png"
                            alt="Acting Performance Studio"
                            width={400}
                            height={400}
                            priority
                        />
                    </IllustrationBox>
                </LeftSection>
            </Grid>

            {/* Right Section */}
            <Grid size={{ xs: 12, md: 6 }}>
                <RightSection>
                    <FormContainer>
                        <RightLogoBox>
                            <Image
                                src={Logo}
                                alt="Acting Performance Studio"
                                width={160}
                                height={40}
                            />
                        </RightLogoBox>
                        
                        <Title>Welcome to Acting Performance Studio</Title>
                        <FormBox>
                            <Subtitle>Log in to access your dashboard</Subtitle>

                            {error && (
                                <StyledAlert severity="error" onClose={() => dispatch(clearError())}>
                                    {error}
                                </StyledAlert>
                            )}

                            <form onSubmit={handleSubmit}>
                                <Box>
                                    <InputLabel>Email</InputLabel>
                                    <StyledTextField
                                        fullWidth
                                        name="email"
                                        type="email"
                                        variant="outlined"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        required
                                    />
                                </Box>

                                <Box>
                                    <InputLabel>Password</InputLabel>
                                    <StyledTextField
                                        fullWidth
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        variant="outlined"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        disabled={isLoading}
                                        required
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={togglePasswordVisibility}
                                                        edge="end"
                                                        disabled={isLoading}
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 2,
                                        marginTop: "-20px",
                                    }}
                                >
                                    <RememberCheckbox
                                        control={
                                            <Checkbox
                                                name="rememberDevice"
                                                checked={formData.rememberDevice}
                                                onChange={handleChange}
                                                disabled={isLoading}
                                            />
                                        }
                                        label="Remember this device"
                                    />
                                    <Link
                                        href="/auth/forgot-password"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
                                    </Link>
                                </Box>

                                <SignInButton 
                                    type="submit" 
                                    disabled={isLoading}
                                    startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                                >
                                    {isLoading ? "Signing In..." : "Sign In"}
                                </SignInButton>
                            </form>

                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4, mb: 1, width: "100%" }}>
                                <DividerLine />
                                <DividerText>or sign in with</DividerText>
                                <DividerLine />
                            </Box>

                            <GoogleButton
                                startIcon={<FcGoogle size={20} />}
                                onClick={handleGoogleSignIn}
                                disabled={isLoading}
                            >
                                Sign in with Google
                            </GoogleButton>
                        </FormBox>
                    </FormContainer>
                </RightSection>
            </Grid>
        </Grid>
    );
};

export default LoginPage;


