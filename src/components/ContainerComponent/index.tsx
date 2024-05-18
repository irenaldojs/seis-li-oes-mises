import { Bookmark } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useMark } from "../../store/mark";
import { useMode } from "../../store/mode";

type ContainerComponentProps = {
  children?: React.ReactNode;
  text?: string;
  title?: string;
  subtitle?: string;
  introduction?: string;
};

export default function ContainerComponent({
  introduction,
  children,
  text,
  title,
  subtitle,
}: ContainerComponentProps) {
  const { page, verse, setMark } = useMark((state) => state);
  const { theme } = useMode((state) => state);
  const pageName = window.location.pathname.split("#")[0];
  const textFormat = text?.split(".\n ").filter((child) => {
    const part = child.trim();
    if (part != "") return child;
  });

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      gap={2}
      paddingInline={1}
      paddingTop={{ xs: 5, md: 10 }}
      paddingBottom={50}
    >
      <Typography variant="h5">{subtitle}</Typography>
      <Typography variant="h3" textAlign={"center"}>
        {title}
      </Typography>

      <Box sx={{ maxWidth: 800 }}>
        {introduction && (
          <Typography variant="body1">{introduction}</Typography>
        )}
        <br />
        <Box sx={{ textIndent: 50 }}>
          {textFormat?.map((child, index) => (
            <div
              key={title + "_" + index.toString()}
              onClick={() => setMark(pageName, index)}
            >
              <Box
                display={"flex"}
                gap={1}
                sx={{ cursor: "pointer" }}
                position={"relative"}
                onClick={() => setMark(pageName, index)}
              >
                <Box
                  display={"flex"}
                  gap={2}
                  sx={{ cursor: "pointer" }}
                  position={"relative"}
                  color={theme === "light" ? "#085475" : "white"}
                  onClick={() => setMark(pageName, index)}
                >
                  <Box position={"absolute"} alignItems={"start"} right={-50}>
                    {pageName === page && verse === index && (
                      <Bookmark color="inherit" />
                    )}
                  </Box>

                  <Typography position={"absolute"} right={-25} variant="body1">
                    <span id={index.toString()}>{index + 1 + "."}</span>
                  </Typography>
                </Box>
                <Typography variant="body1">{child}</Typography>
              </Box>
            </div>
          ))}
        </Box>
        {children}
      </Box>
    </Box>
  );
}
