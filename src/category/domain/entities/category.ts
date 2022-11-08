import { randomUUID } from 'crypto';


export type CategoryProperties = {
	name: string;
   	description?: string;
   	is_active?: boolean;
   	created_at?: Date;
}

/*
	entidade - identidade, comportamentos e atributos
	id auto incremento
	politica e detalhes
	UUID - Universally Unique Indentifier V4 - IETF RFC
*/
export class Category{
	public readonly id: string;
	
    constructor(public readonly props: CategoryProperties, id?: string){    	
    	this.id = id || randomUUID();
    	console.log(this.id);
    	this.description = this.props.description;
    	this.is_active = this.props.is_active;
    	this.created_at = this.props.created_at;    	
    }
    // Entidade vs Entidades Anemicas
    // TDD - Kent Beck
    // Tests - Fail - Success - Refactor
    
    private set description(value: string){
        	this.props.description = value ?? null;
    }

    private set is_active(value: boolean){
    	this.props.is_active = value ?? true;
    }

    private set created_at(value: Date){
    	this.props.created_at = value ?? new Date();
    }
	    
    get name(): string {
    	return this.props.name;
    }

    get description() {
    	return this.props.description;
    }

    get is_active(){
    	return this.props.is_active;
    }

    get created_at(){
    	return this.props.created_at;
    }   
    
}
