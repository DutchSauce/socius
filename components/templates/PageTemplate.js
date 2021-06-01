export default function PageTemplate(props){
    const {children} = props;
    return (
        <div className="bg-gradient-to-br from-purple-dark to-orange-dark">
            {children}
        </div>
    )
}