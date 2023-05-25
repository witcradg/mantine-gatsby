import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import { MantineProvider, ColorSchemeProvider, AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import LightAndDarkModeButton from '../LightDarkButton';


// interface LayoutProps {
//   children: React.ReactNode;
// }

export function Layout({ children }) {
  const [colorScheme, setColorScheme] = useState('light');
  const [opened, setOpened] = useState(false);
  
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  const theme = useMantineTheme();

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      {/* skipping withCSSVariables for now. Use this if I want to style my own components with 
      regular css like this:
        .my-button {
        background-color: var(--mantine-color-blue-6);
        font-family: var(--mantine-font-family);
        line-height: var(--mantine-line-height);
        }
        For more details see https://mantine.dev/theming/mantine-provider/

        */}

      {/* Add your theme here */}
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell
      navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                >
                    <Navbar.Section>
                        <Text>hello this is title</Text>
                    </Navbar.Section>
                    <Navbar.Section grow mt="lg">
                        <Text>example1</Text>
                        <Text>example2</Text>
                        <Text>example3</Text>
                        <Text>example4</Text>
                    </Navbar.Section>
                    <Navbar.Section>
                        <Text>footer</Text>
                    </Navbar.Section>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Aside
                        p="md"
                        hiddenBreakpoint="sm"
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                        <LightAndDarkModeButton />
                    </div>
                </Header>
            }
        >
            {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
