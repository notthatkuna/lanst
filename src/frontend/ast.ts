export type NodeType = 
					  // STATEMENTS
					 | "Program"
					 | "VarDeclaration"
					 | "FunctionDeclaration"
					 | "Class"
					 | "IfStatement"
					 | "WhileLoop"
					 | "Decorator"
					  // EXPRESSIONS
					 | "AssignmentExpr"
					 | "MemberExpr"
					 | "CallExpr"
					 | "Comment"
					 | "Comparator"
					 | "Thrower"
					 | "New"

					 | "Property"
					 | "ObjectLiteral"
					 | "ListLiteral"
					 | "NumericalLiteral"
					 | "StringLiteral"
					 | "Identifier"
					 | "BinaryExpr"
					 | null