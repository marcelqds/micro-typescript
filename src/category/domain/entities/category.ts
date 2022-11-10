//import { randomUUID } from 'crypto';
import { Entity } from '@seedwork/domain/entity/entity';
import { UniqueEntityId } from '../../../@seedwork/domain/value-objects/unique-entity-id';
//limit partial

export type CategoryProperties = {
	name: string;
   	description?: string;
   	is_active?: boolean;
   	created_at?: Date;
}

interface PropsUpdateCategory {
  name?: string;
  description?: string;
}

/*
	entidade - identidade, comportamentos e atributos
	id auto incremento
	politica e detalhes
	UUID - Universally Unique Indentifier V4 - IETF RFC
*/

export class Category {
// export class Category extends Entity<CategoryProperties>{
    public readonly id: UniqueEntityId;

    constructor(public readonly props: CategoryProperties, id?: UniqueEntityId){
      //super(props,id);    	
      this.id = id || new UniqueEntityId();      
    	this.description = this.props.description;
    	this.is_active = this.props.is_active;
    	this.created_at = this.props.created_at;

    }
    // Entidade vs Entidades Anemicas
    // TDD - Kent Beck
    // Tests - Fail - Success - Refactor
    
    private set description(value: any){
        	this.props.description = value ?? null;
    }

    private set is_active(value: boolean|undefined){
    	this.props.is_active = value ?? true;
    }

    private set created_at(value: Date | undefined){
    	this.props.created_at = value ?? new Date();
    }
	  
    private set name(value: string| undefined){
      this.props.name = value ?? this.props.name;
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
    	return this.props.created_at as Date;
    }

    update(props:PropsUpdateCategory){
      this.name = props.name;
      this.description = props.description;
    }

    activate(){
      this.is_active = true;
    }

    deactive(){
      this.is_active = false;
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

