//import { randomUUID } from 'crypto';
import { UniqueEntityId } from '../../../@seedwork/domain/unique-entity-id';
//limit partial

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
	public readonly id: UniqueEntityId;
	
    constructor(public readonly props: CategoryProperties, id?: UniqueEntityId){    	
    	this.id = id || new UniqueEntityId();    	    	
    	//'12345678-1234-1234-b123-123456123456'
    	
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

/*
 Mede, quantifica ou descreve uma coisa no domínio

 Pode ser mantido como imutável

 Ele modela um toque conceitual compondo atributos relacionados como uma unidade integral

 ele é completamente substituível quando a medição ou descrição muda

 Ele pode ser comparado com outros usando a igualdade de valor

 Ele fornece para comportamento livre de efeitos colaterais - imutável

const obj1 = {nome: "marcelo"};
const obj2 = {nome: "marcelo"};

obj2 === obj1

// 
*/

