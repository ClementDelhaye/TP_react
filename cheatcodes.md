define a component :

function ArticleTitle() {
return <Text>React Native Design Patterns</Text>;
}

Add props as an argument to pass the information on your Component :

function ArticleTitle(props) {
return <Text>{props.title} for React Native</Text>;
}

specify default values on props :

interface LayoutProps {
withBackButton: boolean
}
function Layout({withBackButton = false, children}: LayoutProps) {
return (
<View>
{withBackButton && <BackButton />}
{children}
</View>
);
}
