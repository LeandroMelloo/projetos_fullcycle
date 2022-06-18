export type LatLng = { lat: number, lng: number};

export type RouteProps = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[] // ? -> defini que não é obrigatorio
}

export class Route {
    public props: Required<RouteProps>

    constructor(props: RouteProps) {
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    updateTitle(title: string) {
        this.title = title
        // mudar pra maiusculo
        // valor alguns caracteres
        // validações
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.startPosition = startPosition;
        this.endPosition = endPosition;
        // mudar pra maiusculo
        // valor alguns caracteres
        // validações
    }

    updatePoints(points: LatLng[]) {
        this.points = points;
        // mudar pra maiusculo
        // valor alguns caracteres
        // validações
    }

    // Public
    get title() {
        return this.props.title;
    }

    // Private
    private set title(value: string) {
        this.props.title = value;
    }

    // Public
    get startPosition() {
        return this.props.startPosition;
    }

    // Private
    private set startPosition(value: LatLng) {
        this.props.startPosition = value;
    }

    // Public
    get endPosition() {
        return this.props.endPosition;
    }

    // Private
    private set endPosition(value: LatLng) {
        this.props.endPosition = value;
    }

    // Public
    get points() {
        return this.props.points;
    }

    // Private
    private set points(value: LatLng[]) {
        this.props.points = value;
    }

    toJSON() {
        return this.props;
    }
    
}