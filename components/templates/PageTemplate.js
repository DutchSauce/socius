export default function PageTemplate(props){
    const {children} = props;
    return (
        <div className="bg-gradient-to-r from-purple-dark to-orange-dark">
            {children}
        </div>
    )
}